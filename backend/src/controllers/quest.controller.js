import { getQuests, getQuestById, createQuest as addQuestToDb } from "../services/quest.service.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { acceptQuest as acceptQuestService } from "../services/quest.service.js";

export async function getAllQuests(req, res) {
  try {
    const quests = await getQuests();
    return successResponse(
      res,
      "Quests fetched successfully.",
      quests
    );
  } catch (error) {
      console.error(error);

      return res.status(500).json({
          error: error.message,
          stack: error.stack,
      });
  }
}

export async function getQuestDetail(req, res) {
  try {
    const { id } = req.params;
    const quest = await getQuestById(id);

    if (!quest) {
      return errorResponse(res, "Quest not found.", 404); 
    }

    return successResponse(res, "Quest details fetched successfully.", quest);
  } catch (error) {
    console.error(error);
    return errorResponse(res, "Failed to fetch quest details.");
  }
}

export async function createQuest(req, res) {
  try {
    const questData = req.body;
    const newQuest = await addQuestToDb(questData);
    return successResponse(res, "Quest created successfully.", newQuest);
  } catch (error) {
    console.error(error);
    return errorResponse(res, "Failed to create quest.");
  }
}

export async function acceptQuest(req, res) {
  try {
    const { id } = req.params;
    const { adventurerId } = req.body;

    const quest = await acceptQuestService(id, adventurerId);

    return successResponse(
      res,
      "Quest accepted successfully.",
      quest
    );
  } catch (error) {
    console.error(error);
    return errorResponse(res, "Failed to accept quest.");
  }
}