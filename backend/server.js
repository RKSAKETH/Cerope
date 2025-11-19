import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Root Path");
});

// Routes
app.use("/auth", authRoute);
app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Backend server is running on port 3000!");
});
