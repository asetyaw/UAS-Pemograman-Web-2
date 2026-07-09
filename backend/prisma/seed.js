import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const aa = await prisma.user.upsert({
    where: {
      email: "aasetya@quest.com",
    },
    update: {},
    create: {
      name: "Aa Setya",
      email: "aasetya@quest.com",
      passwordHash: "$2b$10$xyz123hashpasswordnya",
      bio: "Fullstack Developer & Quest Enthusiast",
      reputationScore: 150,
    },
  });

  const budiono = await prisma.user.upsert({
    where: {
      email: "budiono@kapal.com",
    },
    update: {},
    create: {
      name: "Budiono Siregar",
      email: "budiono@kapal.com",
      passwordHash: "$2b$10$abc456hashpasswordnya",
      bio: "Butuh bantuan logistik log kayu",
      reputationScore: 0,
    },
  });

  const siti = await prisma.user.upsert({
    where: {
      email: "siti@petualang.com",
    },
    update: {},
    create: {
      name: "Siti Adventurer",
      email: "siti@petualang.com",
      passwordHash: "$2b$10$qwe789hashpasswordnya",
      bio: "Siap menyelesaikan quest apa saja",
      reputationScore: 50,
    },
  });

  await prisma.quest.createMany({
    data: [
      {
        title: "Bantu Desain Aplikasi Kasir",
        description:
          "Dicari developer untuk merapikan class structure dan database SQL project kasir berbasis Java OOP.",
        category: "Software Engineering",
        rewardAmount: 500000,
        location: "Bandung (Remote)",
        status: "OPEN",
        giverId: aa.id,
      },
      {
        title: "Kirim Logistik Koperasi Desa",
        description:
          "Memindahkan inventaris koperasi desa.",
        category: "Logistik",
        rewardAmount: 250000,
        location: "Bantengputih",
        status: "IN_PROGRESS",
        giverId: budiono.id,
        adventurerId: siti.id,
      },
      {
        title: "Merapikan Buku Perpustakaan",
        description:
          "Menginput nomor inventaris baru.",
        category: "Administrasi",
        rewardAmount: 150000,
        location: "Perpustakaan Umum",
        status: "COMPLETED",
        giverId: budiono.id,
        adventurerId: siti.id,
      },
    ],

    skipDuplicates: true,
  });

  console.log("Seed success.");
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });