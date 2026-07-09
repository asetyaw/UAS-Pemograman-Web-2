import { Badge } from "@/components/ui/badge";

const badgeVariant = {
  OPEN: "default",
  IN_PROGRESS: "secondary",
  COMPLETED: "outline",
  CANCELLED: "destructive",
};

export default function QuestStatusBadge({ status }) {

  const styles = {
    OPEN:
      "bg-green-100 text-green-700",

    IN_PROGRESS:
      "bg-blue-100 text-blue-700",

    COMPLETED:
      "bg-slate-200 text-slate-700",
  };

  return (

    <span
      className={`px-3 py-1 rounded-full text-xs font-bold ${
        styles[status] ?? "bg-slate-100"
      }`}
    >

      {status.replace("_", " ")}

    </span>

  );

}