import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLogin } from "@/hooks/useAuth";
import { Sword } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const { mutate: login } = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

function handleSubmit(e) {
    e.preventDefault();

    login(form, {
      onSuccess() {
        toast.success("Welcome back, Adventurer!");
        navigate("/");
      },
      onError(error) {
        toast.error(error?.response?.data?.message || "Invalid email or password.");
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6">

        <div className="text-center">

          <Sword
            size={48}
            className="mx-auto text-amber-500"
          />

          <h1 className="text-4xl font-bold mt-4">

            QUEST

          </h1>

          <p className="text-slate-500 mt-2">

            Welcome Back Adventurer

          </p>

        </div>

        <input
          name="email"
          placeholder="Email"
          className="w-full border rounded-xl p-3"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded-xl p-3"
          value={form.password}
          onChange={handleChange}
        />

        <button
          className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-3">

          Login

        </button>

        <p className="text-center text-sm">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-amber-600 font-semibold">

            Register

          </Link>

        </p>

      </form>

    </div>
  );
}