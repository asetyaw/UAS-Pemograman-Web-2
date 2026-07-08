import { useMutation } from "@tanstack/react-query";
import { saveUser } from "@/utils/auth";
import toast from "react-hot-toast";

import {
  login,
  register,
} from "../services/auth.service";

export function useLogin() {
  return useMutation({
    mutationFn: login,

    onSuccess(user) {
      saveUser(user);

      toast.success("Login Success");
    },

    onError(error) {
      toast.error(
        error.response?.data?.message ??
        "Login Failed"
      );
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: register,

    onSuccess() {
      toast.success("Register Success");
    },

    onError(error) {
      toast.error(
        error.response?.data?.message ||
          "Register Failed"
      );
    },
  });
}