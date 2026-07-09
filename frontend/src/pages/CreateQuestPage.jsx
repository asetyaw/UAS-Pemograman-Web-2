import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { getUser } from "@/utils/auth";
import { useCreateQuest } from "@/hooks/useCreateQuest";

export default function CreateQuestPage() {

  const navigate = useNavigate();

  const user = getUser();

  const createMutation = useCreateQuest();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    rewardAmount: "",
    location: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault();

    createMutation.mutate(
      {
        ...form,
        rewardAmount: Number(form.rewardAmount),
        giverId: user.id,
      },
      {
        onSuccess() {
          toast.success("Quest Published!");

          navigate("/");
        },

        onError(error) {
          toast.error(
            error.response?.data?.message ??
            "Failed to publish quest."
          );
        },
      }
    );
  }

  return (

    <form
      onSubmit={submit}
      className="bg-background rounded-xl shadow p-8 space-y-5"
    >

      <h1 className="text-3xl font-bold">

        Create New Quest

      </h1>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Quest Title"
        className="border rounded-xl p-3 w-full"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        rows="5"
        placeholder="Description"
        className="border rounded-xl p-3 w-full"
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="border rounded-xl p-3 w-full"
      />

      <input
        name="rewardAmount"
        value={form.rewardAmount}
        onChange={handleChange}
        placeholder="Reward"
        type="number"
        className="border rounded-xl p-3 w-full"
      />

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        className="border rounded-xl p-3 w-full"
      />

      <button
        disabled={createMutation.isPending}
        className="bg-amber-500 text-muted rounded-xl px-6 py-3"
      >
        {createMutation.isPending
          ? "Publishing..."
          : "Publish Quest"}
      </button>

    </form>
  );
}