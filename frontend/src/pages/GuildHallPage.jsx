import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import QuestCard from "@/components/quest/QuestCard";
import { useQuests } from "@/hooks/useQuest";

export default function GuildHallPage() {
  const { data, isLoading } = useQuests();

  const quests = data?.data ?? [];

  return (
    <div className="space-y-8">

      <HeroSection />

      <SearchBar />

      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-2 rounded-full bg-amber-500 text-white">
          All
        </button>

        <button className="px-4 py-2 rounded-full bg-white border">
          Software
        </button>

        <button className="px-4 py-2 rounded-full bg-white border">
          Cleaning
        </button>

        <button className="px-4 py-2 rounded-full bg-white border">
          Delivery
        </button>

        <button className="px-4 py-2 rounded-full bg-white border">
          Design
        </button>
      </div>

      {isLoading ? (
        <p>Loading quests...</p>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {quests.map((quest) => (
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