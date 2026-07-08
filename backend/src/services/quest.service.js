import prisma from "../lib/prisma.js";

export async function getQuests() {
  return prisma.quest.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      giver: {
        select: {
          id: true,
          name: true,
          reputationScore: true,
        },
      },
      adventurer: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export async function getQuestById(id) {
  return prisma.quest.findUnique({
    where: {
      id: id,
    },
    include: {
      giver: true,
      adventurer: true,
    },
  });
}

export async function createQuest(data) {
  return prisma.quest.create({
  data,
  include: {
    giver: true,
    adventurer: true,
  },
});
}