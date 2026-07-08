import QuestCard from "@/components/quest/QuestCard";
import { useQuests } from "@/hooks/useQuest";

export default function MyQuestPage(){

    const {data}=useQuests();

    const quests=data?.data ?? [];

    return(

        <div>

            <h1 className="text-4xl font-bold mb-8">

                My Quests

            </h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {

                    quests.map((quest)=>(

                        <QuestCard

                            key={quest.id}

                            quest={quest}

                        />

                    ))

                }

            </div>

        </div>

    )

}