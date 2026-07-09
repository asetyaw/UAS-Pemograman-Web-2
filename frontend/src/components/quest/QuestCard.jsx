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
      className="group cursor-pointer rounded-2xl border-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >

      <CardContent className="p-6 space-y-5">

        {/* Header */}

        <div className="flex justify-between items-start gap-4">

          <div>

            <h2 className="text-xl font-bold text-slate-900 line-clamp-2">

              {quest.title}

            </h2>

            <p className="text-sm text-slate-500 mt-1">

              {quest.category}

            </p>

          </div>

          <QuestStatusBadge status={quest.status} />

        </div>

        {/* Description */}

        <p className="text-slate-600 text-sm leading-6 line-clamp-3">

          {quest.description}

        </p>

        {/* Reward */}

        <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">

          <div className="flex items-center gap-2 text-amber-700">

            <Coins size={18} />

            <span className="text-sm font-medium">

              Reward

            </span>

          </div>

          <h3 className="text-2xl font-black mt-2 text-amber-600">

            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(quest.rewardAmount)}

          </h3>

        </div>

        {/* Footer */}

        <div className="space-y-3">

          <div className="flex items-center gap-2 text-sm text-slate-600">

            <MapPin size={16} />

            {quest.location}

          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">

            <User size={16} />

            {quest.giver.name}

          </div>

        </div>

        <div className="pt-2 border-t flex justify-end">

          <button
            className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all"
          >

            View Details

            <ArrowRight size={18} />

          </button>

        </div>

      </CardContent>

    </Card>
  );
}