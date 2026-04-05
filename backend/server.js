import dotenv from "dotenv";

// 🔥 SABSE PEHLE dotenv
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

// DB connect
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 🔥 check (temporary)
console.log("API KEY:", process.env.OPENAI_API_KEY);