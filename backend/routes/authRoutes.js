import { Router } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

// 1. SIGN UP (Page 2)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1) Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // 2) Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3) Save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully" });
  } catch (err) {
    console.error("Register error:", err);

    // 4) Handle Mongo duplicate error (in case)
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});


// 2. SIGN IN (Page 1)
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Wrong password");

    // Create Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
    // Return user info (excluding password) and token
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/test",async(req,res)=>{
  res.send("Working authRoutes!");
})
export default router;
