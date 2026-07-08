import api from "@/api/axios";

export async function fetchDashboardStats() {
  const response = await api.get("/dashboard");
  return response.data.data;
}