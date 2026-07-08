import prisma from "../lib/prisma.js";

export async function getDashboardStats() {
  const availableQuests = await prisma.quest.count({
    where: {
      status: "OPEN",
    },
  });

  const activeAdventures = await prisma.quest.count({
    where: {
      status: "IN_PROGRESS",
    },
  });

  const totalRewards = await prisma.quest.aggregate({
    _sum: {
      rewardAmount: true,
    },
  });

  return {
    availableQuests,
    activeAdventures,
    totalRewards: Number(totalRewards._sum.rewardAmount ?? 0),
  };
}