import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
console.log("Registering API routes...");
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Quest API",
    version: "1.0.0",
  });
});

export default app;