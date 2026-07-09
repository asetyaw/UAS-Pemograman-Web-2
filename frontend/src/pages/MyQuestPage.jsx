import QuestCard from "@/components/quest/QuestCard";
import { useQuests } from "@/hooks/useQuest";
import { getUser } from "@/utils/auth";

export default function MyQuestPage() {
  const user = getUser();

  const { data, isLoading } = useQuests();

  const quests = data ?? [];

  // Jika belum login, jangan crash
  if (!user) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-2">
          Please Login
        </h1>

        <p className="text-slate-500">
          You need to login to view your quests.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  const createdQuests = quests.filter(
    (quest) => quest.giverId === user.id
  );

  const acceptedQuests = quests.filter(
    (quest) => quest.adventurerId === user.id
  );

  return (
    <div className="space-y-10">

      <section>

        <h1 className="text-4xl font-bold mb-6">
          My Created Quests
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {createdQuests.length === 0 ? (
            <p className="text-slate-500">
              No created quests.
            </p>
          ) : (
            createdQuests.map((quest) => (
              <QuestCard
                key={quest.id}
                quest={quest}
              />
            ))
          )}

        </div>

      </section>

      <section>

        <h1 className="text-4xl font-bold mb-6">
          Accepted Quests
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {acceptedQuests.length === 0 ? (
            <p className="text-slate-500">
              No accepted quests.
            </p>
          ) : (
            acceptedQuests.map((quest) => (
              <QuestCard
                key={quest.id}
                quest={quest}
              />
            ))
          )}

        </div>

      </section>

    </div>
  );
}