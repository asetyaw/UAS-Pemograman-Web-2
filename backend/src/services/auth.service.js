import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export async function register(data) {
  const { name, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });

  const { passwordHash: _, ...safeUser } = user;

  return safeUser;
}

export async function login(data) {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const match = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const { passwordHash, ...safeUser } = user;

  return safeUser;
}