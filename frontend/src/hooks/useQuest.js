import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  fetchQuests,
  fetchQuestById,
  acceptQuest,
  completeQuest,
} from "@/services/quest.service";

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

export function useAcceptQuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, adventurerId }) =>
      acceptQuest(id, adventurerId),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["quests"],
      });

      queryClient.invalidateQueries({
        queryKey: ["quest"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
}

export function useCompleteQuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeQuest,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["quests"],
      });

      queryClient.invalidateQueries({
        queryKey: ["quest"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
}