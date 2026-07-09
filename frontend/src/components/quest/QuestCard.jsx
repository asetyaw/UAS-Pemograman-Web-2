import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Coins,
  User,
  ArrowRight,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import QuestStatusBadge from "./QuestStatusBadge";

export default function QuestCard({ quest }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/quests/${quest.id}`)}
      className="group cursor-pointer rounded-2xl border-0 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />

      <CardContent className="p-6">

        <div className="flex justify-between items-start mb-5">

          <h2 className="text-xl font-bold group-hover:text-amber-600 transition">
            {quest.title}
          </h2>

          <QuestStatusBadge status={quest.status} />

        </div>

        <p className="text-slate-500 line-clamp-3 mb-6">
          {quest.description}
        </p>

        <div className="space-y-3">

          <div className="flex items-center gap-3 text-slate-600">

            <Coins
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(quest.rewardAmount)}
            </span>

          </div>

          <div className="flex items-center gap-3 text-slate-600">

            <MapPin
              size={18}
              className="text-red-500"
            />

            <span>{quest.location}</span>

          </div>

          <div className="flex items-center gap-3 text-slate-600">

            <User
              size={18}
              className="text-blue-500"
            />

            <span>{quest.giver.name}</span>

          </div>

        </div>

        <div className="mt-8 pt-5 border-t flex justify-between items-center">

          <span className="text-sm text-slate-400">
            View Quest Details
          </span>

          <ArrowRight
            className="group-hover:translate-x-1 transition"
            size={20}
          />

        </div>

      </CardContent>

    </Card>
  );
}