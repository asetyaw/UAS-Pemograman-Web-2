import { Button } from "@/components/ui/button";
import { Sword } from "lucide-react";
import { Link } from "react-router-dom";
import { useDashboard } from "@/hooks/useDashboard";

export default function HeroSection() {

  const { data, isLoading } = useDashboard();

  return (
    <section className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 text-white p-10">

      <div className="flex justify-between items-center">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Sword size={40} />

            <h1 className="text-5xl font-bold">
              Guild Hall
            </h1>

          </div>

          <p className="max-w-xl text-lg opacity-90">
            Welcome back, Adventurer.
            Every quest is another opportunity to earn rewards and build your reputation.
          </p>

        </div>

        <Link to="/create-quest">

          <Button className="bg-white text-amber-600 hover:bg-slate-100">

            + Create Quest

          </Button>

        </Link>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div>

          <h2 className="text-3xl font-bold">

            {isLoading ? "..." : data.availableQuests}

          </h2>

          <p>

            Available Quests

          </p>

        </div>

        <div>

          <h2 className="text-3xl font-bold">

            {isLoading ? "..." : data.activeAdventures}

          </h2>

          <p>

            Active Adventures

          </p>

        </div>

        <div>

          <h2 className="text-3xl font-bold">

            {isLoading
              ? "..."
              : new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(data.totalRewards)}

          </h2>

          <p>

            Reward Distributed

          </p>

        </div>

      </div>

    </section>
  );
}