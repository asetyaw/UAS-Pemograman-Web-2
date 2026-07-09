import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptQuest } from "@/services/quest.service";

export function useAcceptQuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, adventurerId }) =>
      acceptQuest(id, adventurerId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["quest"],
      });

      queryClient.invalidateQueries({
        queryKey: ["quests"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
}