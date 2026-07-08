import { z } from "zod";

export const createQuestSchema = z.object({
  title: z.string().min(5).max(150),
  description: z.string().min(10),
  category: z.string().min(3).max(50),
  rewardAmount: z.number().positive(),
  location: z.string().min(3),
  giverId: z.string().uuid(),
});