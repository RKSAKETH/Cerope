import { Router } from "express";
import User from "../models/UserModel.js";

const router = Router();

// // Middleware to verify token
// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     // Assumes format "Bearer <token>"
//     const token = authHeader.split(" ")[1]; 
//     const jwt = require('jsonwebtoken');
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err) return res.status(403).json("Token is not valid!");
//       req.user = user;
//       next();
//     });
//   } 
//   else {
//     return res.status(401).json("You are not authenticated!");
//   }
// };

// // 3. SETUP ACCOUNT / UPDATE PROFILE (Page 3)
// router.put("/me", protect, async (req, res) => {
//   const { username, gender, age, stylePreferences, bio } = req.body;

//   req.user.username = username ?? req.user.username;
//   req.user.gender = gender ?? req.user.gender;
//   req.user.age = age ?? req.user.age;
//   req.user.bio = bio ?? req.user.bio;
//   req.user.stylePreferences = stylePreferences ?? req.user.stylePreferences;

//   req.user.isProfileComplete = true;

//   const updated = await req.user.save();

//   res.json(updated);
// });


// // 4. GET PROFILE DETAILS (Page 4)
// router.get("/me", protect, async (req, res) => {
//   res.json(req.user);
// });

router.get("/test",async(req,res)=>{
  res.send("Working userRoutes!");
})
export default router;