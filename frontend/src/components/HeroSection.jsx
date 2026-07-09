import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/hooks/useDashboard";

import {
  Sword,
  Plus,
  ScrollText,
  Users,
  Coins,
} from "lucide-react";

export default function HeroSection() {
  const { data, isLoading } = useDashboard();

  const stats = [
    {
      title: "Available Quests",
      value: isLoading ? "..." : data.availableQuests,
      icon: <ScrollText className="text-amber-500" />,
    },
    {
      title: "Active Adventures",
      value: isLoading ? "..." : data.activeAdventures,
      icon: <Users className="text-blue-500" />,
    },
    {
      title: "Reward Distributed",
      value: isLoading
        ? "..."
        : new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(data.totalRewards),
      icon: <Coins className="text-green-500" />,
    },
  ];

  return (
    <section className="rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 shadow-2xl">

      <div className="p-10 text-white">

        <div className="flex justify-between items-center">

          <div>

            <div className="flex items-center gap-4 mb-5">

              <div className="bg-white/20 p-4 rounded-2xl">

                <Sword size={34} />

              </div>

              <div>

                <h1 className="text-5xl font-black">

                  Guild Hall

                </h1>

                <p className="text-white/80">

                  Find quests, earn rewards, build your reputation.

                </p>

              </div>

            </div>

            <p className="max-w-2xl text-lg text-white/90">

              Every quest is a new adventure.
              Complete missions, gain reputation,
              and become one of the greatest adventurers in the Guild.

            </p>

          </div>

          <Link to="/create-quest">

            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-slate-100 rounded-xl"
            >
              <Plus className="mr-2 h-5 w-5" />

              Create Quest

            </Button>

          </Link>

        </div>

      </div>

      <div className="bg-white/10 backdrop-blur px-10 py-8">

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >

              <div className="flex justify-between items-center mb-6">

                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">

                  {stat.icon}

                </div>

              </div>

              <h2 className="text-3xl font-black text-slate-800">

                {stat.value}

              </h2>

              <p className="text-slate-500 mt-2">

                {stat.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}