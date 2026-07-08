import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createQuest } from "../services/quest.service";

import toast from "react-hot-toast";

export function useCreateQuest() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createQuest,

        onSuccess:()=>{

            toast.success("Quest Published!");

            queryClient.invalidateQueries({

                queryKey:["quests"]

            });

        }

    });

}