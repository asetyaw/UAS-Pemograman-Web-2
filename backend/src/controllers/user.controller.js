import { getUsers } from "../services/user.service.js";
import {
  successResponse,
  errorResponse,
} from "../utils/response.js";

export async function getAllUsers(req, res) {
  try {
    const users = await getUsers();

    return successResponse(
      res,
      "Users fetched successfully.",
      users
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      "Failed to fetch users."
    );
  }
}