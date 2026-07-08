import { Badge } from "@/components/ui/badge";

const badgeVariant = {
  OPEN: "default",
  IN_PROGRESS: "secondary",
  COMPLETED: "outline",
  CANCELLED: "destructive",
};

export default function QuestStatusBadge({ status }) {
  return (
    <Badge variant={badgeVariant[status] ?? "default"}>
      {status.replace("_", " ")}
    </Badge>
  );
}