import { useParams } from "react-router-dom";
import {
  Coins,
  MapPin,
  User,
  Folder,
  CalendarDays,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import QuestStatusBadge from "@/components/quest/QuestStatusBadge";

import {
  useQuest,
  useAcceptQuest,
  useCompleteQuest,
} from "@/hooks/useQuest";

import { getUser } from "@/utils/auth";

export default function QuestDetailPage() {
  const { id } = useParams();

  const { data: quest, isLoading } = useQuest(id);

  const user = getUser();

  const { mutate: acceptQuest } = useAcceptQuest();
  const { mutate: completeQuest } = useCompleteQuest();

  if (isLoading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  if (!quest) {
    return (
      <div className="text-center py-20">
        Quest not found.
      </div>
    );
  }

  const isOwner = user?.id === quest.giverId;

  const isAdventurer =
    user?.id === quest.adventurerId;

  return (
    <div className="grid lg:grid-cols-3 gap-8">

      {/* LEFT */}

      <div className="lg:col-span-2">

        <Card className="rounded-2xl shadow-md border-0 p-8">

          <div className="flex justify-between items-start gap-4">

            <div>

              <h1 className="text-4xl font-black text-foreground">
                {quest.title}
              </h1>

              <p className="text-slate-500 mt-2">
                {quest.category}
              </p>

            </div>

            <QuestStatusBadge status={quest.status} />

          </div>

          <div className="mt-10">

            <h2 className="text-xl font-bold mb-4">
              Description
            </h2>

            <p className="leading-8 text-slate-600 whitespace-pre-wrap">
              {quest.description}
            </p>

          </div>

        </Card>

      </div>

      {/* RIGHT */}

      <div>

        <Card className="rounded-2xl shadow-md border-0 p-6 space-y-6 sticky top-24">

          <div>

            <p className="text-sm text-slate-500">
              Reward
            </p>

            <div className="flex items-center gap-2 mt-2">

              <Coins className="text-amber-500" />

              <h2 className="text-3xl font-black text-amber-600">

                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(quest.rewardAmount)}

              </h2>

            </div>

          </div>

          <hr />

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <MapPin
                size={18}
                className="text-slate-500"
              />

              <span>{quest.location}</span>

            </div>

            <div className="flex items-center gap-3">

              <Folder
                size={18}
                className="text-slate-500"
              />

              <span>{quest.category}</span>

            </div>

            <div className="flex items-center gap-3">

              <User
                size={18}
                className="text-slate-500"
              />

              <span>{quest.giver.name}</span>

            </div>

            <div className="flex items-center gap-3">

              <CalendarDays
                size={18}
                className="text-slate-500"
              />

              <span>
                {new Date(
                  quest.createdAt
                ).toLocaleDateString("id-ID")}
              </span>

            </div>

          </div>

          {/* BUTTON */}

          {quest.status === "OPEN" && !isOwner && (

            <Button
              className="w-full mt-4"
              onClick={() =>
                acceptQuest({
                  id: quest.id,
                  adventurerId: user.id,
                })
              }
            >

              Accept Quest

            </Button>

          )}

          {quest.status === "OPEN" && isOwner && (

            <Button
              disabled
              variant="secondary"
              className="w-full mt-4"
            >

              Waiting for Adventurer

            </Button>

          )}

          {quest.status === "IN_PROGRESS" && isAdventurer && (

            <Button
              className="w-full mt-4"
              onClick={() =>
                completeQuest(quest.id)
              }
            >

              Complete Quest

            </Button>

          )}

          {quest.status === "IN_PROGRESS" && !isAdventurer && (

            <Button
              disabled
              variant="secondary"
              className="w-full mt-4"
            >

              Quest In Progress

            </Button>

          )}

          {quest.status === "COMPLETED" && (

            <Button
              disabled
              variant="secondary"
              className="w-full mt-4"
            >

              Quest Completed

            </Button>

          )}

        </Card>

      </div>

    </div>
  );
}