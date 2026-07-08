import {
  login,
  register,
} from "../services/auth.service.js";

import {
  successResponse,
  errorResponse,
} from "../utils/response.js";

export async function registerUser(req, res) {
  try {
    const user = await register(req.body);

    return successResponse(
      res,
      "Register success.",
      user
    );
  } catch (err) {
    if (err.message === "EMAIL_EXISTS") {
      return errorResponse(
        res,
        "Email already registered.",
        400
      );
    }

    console.error(err);

    return errorResponse(
      res,
      "Register failed."
    );
  }
}

export async function loginUser(req, res) {
  try {
    const user = await login(req.body);

    return successResponse(
      res,
      "Login success.",
      user
    );
  } catch (err) {
    if (err.message === "INVALID_CREDENTIALS") {
      return errorResponse(
        res,
        "Invalid email or password.",
        401
      );
    }

    console.error(err);

    return errorResponse(
      res,
      "Login failed."
    );
  }
}