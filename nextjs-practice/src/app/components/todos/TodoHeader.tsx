import React from "react";

interface TodoHeaderProps {
  totalTasks: number;
}

const TodoHeader = ({ totalTasks }: TodoHeaderProps) => {
  return (
    <header className="space-y-2">
      <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
        Focus mode
      </p>

      <div className="flex items-baseline justify-between gap-2">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Your Todo Desk
        </h1>

        <span className="text-xs sm:text-sm text-slate-400">
          {totalTasks} tasks
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-400">
        Capture what matters, check things off, and keep today under control.
      </p>
    </header>
  );
};

export default TodoHeader;