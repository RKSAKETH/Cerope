import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/authRoutes.js";
import profileRoute from "./routes/profileRoutes.js"

dotenv.config();
const port = 3000;

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
app.use("/profile",profileRoute);

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}!`);
});
