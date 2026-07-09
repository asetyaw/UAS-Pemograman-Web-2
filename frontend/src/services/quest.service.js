import api from "../api/axios";

export async function fetchQuests() {
  const response = await api.get("/quests");
  return response.data.data;
}

export async function fetchQuestById(id) {
  const response = await api.get(`/quests/${id}`);
  return response.data.data;
}

export async function createQuest(data) {
  const response = await api.post("/quests", data);
  return response.data.data;
}

export async function acceptQuest(id, adventurerId) {
  const response = await api.patch(`/quests/${id}/accept`, {
    adventurerId,
  });

  return response.data.data;
}