import { useNavigate } from "react-router-dom";

import {
    Coins,
    MapPin,
    User,
    ArrowRight
} from "lucide-react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import QuestReward from "./QuestReward";
import QuestStatusBadge from "./QuestStatusBadge";

export default function QuestCard({ quest }) {

    const navigate = useNavigate();

    return (

        <Card
            onClick={() => navigate(`/quests/${quest.id}`)}
            className="cursor-pointer hover:shadow-xl transition duration-300 hover:-translate-y-1">

            <CardHeader>

                <div className="flex justify-between items-center">

                    <CardTitle>

                        {quest.title}

                    </CardTitle>

                    <QuestStatusBadge status={quest.status}/>

                </div>

            </CardHeader>

            <CardContent className="space-y-4">

                <p className="text-sm text-slate-500 line-clamp-2">

                    {quest.description}

                </p>

                <div className="flex items-center gap-2">

                    <Coins size={18}/>

                    <QuestReward amount={quest.rewardAmount}/>

                </div>

                <div className="flex items-center gap-2">

                    <MapPin size={18}/>

                    {quest.location}

                </div>

                <div className="flex items-center gap-2">

                    <User size={18}/>

                    {quest.giver.name}

                </div>

                <div className="flex justify-end">

                    <button className="flex items-center gap-2 text-amber-600 font-semibold">

                        View Quest

                        <ArrowRight size={16}/>

                    </button>

                </div>

            </CardContent>

        </Card>

    );

}