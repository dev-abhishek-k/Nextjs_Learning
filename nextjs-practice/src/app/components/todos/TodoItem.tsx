"use client";
import {useRouter} from "next/navigation";
import React from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const router = useRouter();

const handleToggle = async () => {
  try {

    await fetch(`/api/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });

        router.refresh();

  } catch (error) {
    console.log(error);
  }
};



  const handleDelete = async () => {
    
    try {
      await fetch(`/api/todos/${todo.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
     
      });

        router.refresh();
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <li className="group flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2.5 text-xs sm:text-sm transition hover:border-emerald-500/40 hover:bg-slate-900">

      <span className="relative inline-flex h-4 w-4 flex-none items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 group-hover:border-emerald-400/80">
        {todo.completed && (
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
        )}
      </span>

      <div className="flex-1 min-w-0">
        <p
          className={`truncate ${
            todo.completed
              ? "text-slate-500 line-through"
              : "text-slate-100"
          }`}
        >
          {todo.title}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-500">
          {new Date(todo.createdAt).toLocaleString("en-IN")}
        </p>
      </div>

      <div className="flex gap-1.5">

        <button
          onClick={handleToggle}
          type="button"
          className="rounded-full border border-slate-700/80 px-2 py-1 text-[10px] text-slate-300 transition hover:border-emerald-400/80 hover:bg-emerald-500/10"
        >
          Toggle
        </button>



        <button
          onClick={handleDelete}
          type="button"
          className="rounded-full border border-red-500/40 bg-red-500/5 px-2 py-1 text-[10px] text-red-300 transition hover:border-red-400 hover:bg-red-500/15"
        >
          Delete
        </button>

      </div>
    </li>
  );
};

export default TodoItem;