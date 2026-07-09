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

export async function acceptQuest(id, adventurerId) {
  return prisma.quest.update({
    where: {
      id,
    },
    data: {
      adventurerId,
      status: "IN_PROGRESS",
    },
    include: {
      giver: true,
      adventurer: true,
    },
  });
}

export async function completeQuest(id) {
  return prisma.quest.update({
    where: {
      id,
    },
    data: {
      status: "COMPLETED",
      completedAt: new Date(),
    },
    include: {
      giver: true,
      adventurer: true,
    },
  });
}