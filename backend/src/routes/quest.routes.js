import { Router } from "express";
import { getAllQuests, getQuestDetail, createQuest, acceptQuest } from "../controllers/quest.controller.js";

const router = Router();

router.get("/", getAllQuests);
router.post("/", createQuest);
router.get("/:id", getQuestDetail);
router.patch("/:id/accept", acceptQuest);
console.log("Quest routes loaded");

export default router;