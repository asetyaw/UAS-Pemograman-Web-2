import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.$executeRawUnsafe(`
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'quest_status'
    ) THEN
        CREATE TYPE quest_status AS ENUM (
            'OPEN',
            'IN_PROGRESS',
            'COMPLETED',
            'CANCELLED'
        );
    END IF;
END
$$;

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    bio TEXT,
    reputation_score INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(150) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    reward_amount NUMERIC(12,2) NOT NULL,
    location VARCHAR(150),
    status quest_status NOT NULL DEFAULT 'OPEN',
    giver_id UUID NOT NULL REFERENCES users(id),
    adventurer_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_quests_status
ON quests(status);

CREATE INDEX IF NOT EXISTS idx_quests_giver
ON quests(giver_id);

CREATE INDEX IF NOT EXISTS idx_quests_adventurer
ON quests(adventurer_id);
`);

  console.log("Migration success.");
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });