// models/UserModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },            // if you already have this, keep it
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // 👇 NEW: embedded profile object
    profile: {
      firstName: { type: String },
      lastName: { type: String },
      profilePicture: { type: String , default : ""},
      dateOfBirth: { type: Date },
      stylePreference: { type: String, enum: ["Men", "Women", "Both"] },
      phoneNumber: { type: String },
      country: { type: String },
      city: { type: String },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
