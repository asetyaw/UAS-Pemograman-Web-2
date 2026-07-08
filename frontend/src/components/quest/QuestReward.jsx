export default function QuestReward({ amount }) {
  return (
    <div className="font-semibold text-amber-600">
      🏆 Reward Rp {Number(amount).toLocaleString("id-ID")}
    </div>
  );
}