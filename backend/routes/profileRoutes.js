import { Router } from "express";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const router = Router();

// ========== MIDDLEWARE ==========
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id || decoded.userId };
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

// ========== SAVE / UPDATE PROFILE ==========
router.post("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      firstName,
      lastName,
      profilePicture,
      dateOfBirth,
      stylePreference,
      phoneNumber,
      country,
      city,
    } = req.body;

    if (!firstName || !dateOfBirth || !stylePreference || !country) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const profileData = {
      firstName,
      lastName,
      profilePicture,
      dateOfBirth,
      stylePreference,
      phoneNumber,
      country,
      city,
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { profile: profileData } },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      message: "Profile saved successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Profile error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// ========== GET PROFILE DATA ==========
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      user: {
        email: user.email,
        name: user.name,
      },
      profile: user.profile || {},
    });
  } catch (err) {
    console.error("Get profile error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
