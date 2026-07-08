import { getDashboardStats } from "../services/dashboard.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export async function dashboardStats(req, res) {
  try {
    const stats = await getDashboardStats();

    return successResponse(
      res,
      "Dashboard fetched successfully.",
      stats
    );
  } catch (err) {
    console.error(err);

    return errorResponse(
      res,
      "Failed to fetch dashboard."
    );
  }
}