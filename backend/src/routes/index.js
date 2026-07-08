import { Router } from "express";
import authRoutes from "./auth.routes.js";
import healthRoutes from "./health.routes.js";
import userRoutes from "./user.routes.js";
import questRoutes from "./quest.routes.js";
import dashboardRoutes from "./dashboard.routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/users", userRoutes);
router.use("/quests", questRoutes);
router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;