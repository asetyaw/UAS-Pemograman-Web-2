import { Coins, MapPin, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuests } from "@/hooks/useQuest";
import toast from "react-hot-toast";

export default function QuestDetailPage() {
  const { id } = useParams();
  const { data } = useQuests();

  const quest = data?.data?.find((q) => q.id === id);

  if (!quest) return <h1>Quest not found</h1>;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 space-y-6">

      <h1 className="text-4xl font-bold">

        {quest.title}

      </h1>

      <p className="text-slate-500">

        {quest.description}

      </p>

      <div className="flex items-center gap-2">

        <Coins size={18}/>

        Rp {Number(quest.rewardAmount).toLocaleString("id-ID")}

      </div>

      <div className="flex items-center gap-2">

        <MapPin size={18}/>

        {quest.location}

      </div>

      <div className="flex items-center gap-2">

        <User size={18}/>

        {quest.giver.name}

      </div>

      <button

        onClick={()=>toast.success("Quest Accepted!")}

        className="bg-amber-500 text-white rounded-xl px-6 py-3">

        Accept Quest

      </button>

    </div>
  );
}