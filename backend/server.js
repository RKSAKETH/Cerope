import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
