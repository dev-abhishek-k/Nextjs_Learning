"use client";

import React, { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const handleAddTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");

  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500 text-xs">
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