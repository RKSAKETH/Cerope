import { Router } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

// 1. SIGN UP (Page 2)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
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
