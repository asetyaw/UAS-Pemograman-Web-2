import { getQuests, getQuestById, createQuest as addQuestToDb } from "../services/quest.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

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

    return errorResponse(
      res,
      "Failed to fetch quests."
    );
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