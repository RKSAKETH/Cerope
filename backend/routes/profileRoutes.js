import { Router } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id || decoded.userId }; // match what you used when signing
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

router.post("/users/profile", verifyToken, async (req, res) => {
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

    // Basic backend validation (extra safety)
    if (!firstName || !dateOfBirth || !stylePreference || !country) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const profileData = {
      user: userId,
      firstName,
      lastName,
      profilePicture,
      dateOfBirth,
      stylePreference,
      phoneNumber,
      country,
      city,
    };

    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { $set: profileData },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      message: "Profile saved successfully",
      profile,
    });
  } catch (err) {
    console.error("Profile error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
