"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleAddTodo = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      setTitle("");

      router.refresh();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        
        <div className="relative flex-1">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-slate-500">
            ⌘
          </span>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-8 py-2.5 text-sm"
          />
        </div>

        <button
          onClick={handleAddTodo}
          type="button"
          className="rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950"
        >
          Add task
        </button>

      </div>
    </div>
  );
};

export default TodoForm;