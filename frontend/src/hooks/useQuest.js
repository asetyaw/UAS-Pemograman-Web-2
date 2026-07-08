import { useQuery } from "@tanstack/react-query";
import {
  fetchQuests,
  fetchQuestById,
} from "../services/quest.service";

export function useQuests() {
  return useQuery({
    queryKey: ["quests"],
    queryFn: fetchQuests,
  });
}

export function useQuest(id) {
  return useQuery({
    queryKey: ["quest", id],
    queryFn: () => fetchQuestById(id),
    enabled: !!id,
  });
}