import prisma from "../lib/prisma.js";

export async function getUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      bio: true,
      reputationScore: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}