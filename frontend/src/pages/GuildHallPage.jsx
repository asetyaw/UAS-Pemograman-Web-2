import { useState } from "react";

import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import QuestCard from "@/components/quest/QuestCard";
import { useQuests } from "@/hooks/useQuest";

export default function GuildHallPage() {

  const { data, isLoading } = useQuests();

  const quests = data ?? [];

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("ALL");

  const filteredQuests = quests.filter((quest) => {

    const matchSearch =
      quest.title.toLowerCase().includes(search.toLowerCase()) ||
      quest.description?.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "ALL" ||
      quest.status === status;

    return matchSearch && matchStatus;

  });

  const statuses = [
    "ALL",
    "OPEN",
    "IN_PROGRESS",
    "COMPLETED",
  ];

  return (

    <div className="space-y-8">

      <HeroSection />

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="flex gap-2 flex-wrap">

        {statuses.map((item) => (

          <button
            key={item}
            onClick={() => setStatus(item)}
            className={
              status === item
                ? "px-4 py-2 rounded-full bg-amber-500 text-muted"
                : "px-4 py-2 rounded-full bg-background border"
            }
          >

            {item.replace("_", " ")}

          </button>

        ))}

      </div>

      {isLoading ? (

        <p>Loading quests...</p>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredQuests.map((quest) => (

            <QuestCard
              key={quest.id}
              quest={quest}
            />

          ))}

        </div>

      )}

    </div>

  );

}