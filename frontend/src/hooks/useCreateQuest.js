import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuest } from "../services/quest.service";

export function useCreateQuest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createQuest,

        onSuccess:()=>{
                queryClient.invalidateQueries({
                    queryKey:["quests"]

            });

                queryClient.invalidateQueries({
                    queryKey:["dashboard"]
            });

        }

    });

}