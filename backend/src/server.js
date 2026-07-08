import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Quest Backend API is running 🚀",
    timestamp: new Date().toISOString(),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});