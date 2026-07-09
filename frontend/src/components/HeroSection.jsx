import { Link } from "react-router-dom";
import {
  ScrollText,
  Users,
  Coins,
  PlusCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDashboard } from "@/hooks/useDashboard";

export default function HeroSection() {
  const { data, isLoading } = useDashboard();

  return (
    <section className="space-y-6">

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

        <div>

          <p className="text-sm uppercase tracking-widest text-amber-600 font-semibold">
            Quest Platform
          </p>

          <h1 className="text-5xl font-black mt-2 text-slate-900">
            Guild Hall
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl leading-7">
            Explore quests from other adventurers, earn rewards,
            build your reputation, and become the strongest member
            of the guild.
          </p>

        </div>

        <Link to="/create-quest">

          <Button
            size="lg"
            className="h-12 px-8 rounded-xl bg-amber-500 hover:bg-amber-600"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Quest
          </Button>

        </Link>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <Card className="rounded-2xl border-0 shadow-md">

          <div className="p-6">

            <div className="flex justify-between items-center">

              <ScrollText
                className="text-amber-500"
                size={30}
              />

              <span className="text-xs text-slate-500 uppercase">
                Available
              </span>

            </div>

            <h2 className="text-4xl font-black mt-6">

              {isLoading ? "..." : data.availableQuests}

            </h2>

            <p className="text-slate-500 mt-2">

              Open Quests

            </p>

          </div>

        </Card>

        <Card className="rounded-2xl border-0 shadow-md">

          <div className="p-6">

            <div className="flex justify-between items-center">

              <Users
                className="text-blue-500"
                size={30}
              />

              <span className="text-xs text-slate-500 uppercase">
                Active
              </span>

            </div>

            <h2 className="text-4xl font-black mt-6">

              {isLoading ? "..." : data.activeAdventures}

            </h2>

            <p className="text-slate-500 mt-2">

              Adventurers

            </p>

          </div>

        </Card>

        <Card className="rounded-2xl border-0 shadow-md">

          <div className="p-6">

            <div className="flex justify-between items-center">

              <Coins
                className="text-green-600"
                size={30}
              />

              <span className="text-xs text-slate-500 uppercase">
                Rewards
              </span>

            </div>

            <h2 className="text-3xl font-black mt-6">

              {isLoading
                ? "..."
                : new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(data.totalRewards)}

            </h2>

            <p className="text-slate-500 mt-2">

              Distributed

            </p>

          </div>

        </Card>

      </div>

    </section>
  );
}