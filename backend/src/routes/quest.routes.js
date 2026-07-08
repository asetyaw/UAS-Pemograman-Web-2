import { Router } from "express";
import { getAllQuests, getQuestDetail, createQuest } from "../controllers/quest.controller.js";

const router = Router();

router.get("/", getAllQuests);
router.post("/", createQuest);
router.get("/:id", getQuestDetail);
console.log("Quest routes loaded");

export default router;