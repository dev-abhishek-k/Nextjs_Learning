// import React from "react";
// import { fetchTodos } from "@/lib/todos";

// const TodosPage = async () => {
//   const todos = await fetchTodos();

//   return (
//     <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
//       <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl p-6 sm:p-8 space-y-6">
//         <header className="space-y-2">
//           <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
//             Focus mode
//           </p>
//           <div className="flex items-baseline justify-between gap-2">
//             <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
//               Your Todo Desk
//             </h1>
//             <span className="text-xs sm:text-sm text-slate-400">
//               {todos.length} tasks
//             </span>
//           </div>
//           <p className="text-xs sm:text-sm text-slate-400">
//             Capture what matters, check things off, and keep today under
//             control.
//           </p>
//         </header>

//         <div className="space-y-3">
//           <div className="flex flex-col sm:flex-row gap-2">
//             <div className="relative flex-1">
//               <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500 text-xs">
//                 ⌘
//               </span>
//               <input
//                 type="text"
//                 placeholder="Add a new task and hit Enter…"
//                 className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-8 py-2.5 text-sm outline-none ring-0 transition focus:border-emerald-500/70 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40"
//               />
//             </div>
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-[0_18px_35px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400 hover:shadow-[0_18px_40px_rgba(16,185,129,0.75)]"
//             >
//               Add task
//             </button>
//           </div>
//           <p className="text-[11px] text-slate-500">
//             Design only right now – you can wire this up to your API whenever
//             you are ready.
//           </p>
//         </div>

//         <div className="mt-3 space-y-1.5 rounded-2xl bg-slate-900/60 p-3 sm:p-4 border border-slate-800/80">
//           {todos.length === 0 ? (
//             <div className="flex flex-col items-center justify-center gap-1 py-6 text-center text-slate-500 text-sm">
//               <span className="text-lg">Nothing on your plate.</span>
//               <span className="text-xs text-slate-500">
//                 Start by writing your first task above.
//               </span>
//             </div>
//           ) : (
//             <ul className="space-y-1.5">
//               {todos.map((todo) => (
//                 <li
//                   key={todo.id}
//                   className="group flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2.5 text-xs sm:text-sm transition hover:border-emerald-500/40 hover:bg-slate-900"
//                 >
//                   <span className="relative inline-flex h-4 w-4 flex-none items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 group-hover:border-emerald-400/80">
//                     {todo.completed && (
//                       <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
//                     )}
//                   </span>
//                   <div className="flex-1 min-w-0">
//                     <p
//                       className={`truncate ${
//                         todo.completed
//                           ? "text-slate-500 line-through"
//                           : "text-slate-100"
//                       }`}
//                     >
//                       {todo.title}
//                     </p>
//                     <p className="mt-0.5 text-[10px] text-slate-500">
//                       {new Date(todo.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                   <div className="flex gap-1.5">
//                     <button
//                       type="button"
//                       className="rounded-full border border-slate-700/80 px-2 py-1 text-[10px] text-slate-300 transition hover:border-emerald-400/80 hover:bg-emerald-500/10"
//                     >
//                       Toggle
//                     </button>
//                     <button
//                       type="button"
//                       className="rounded-full border border-red-500/40 bg-red-500/5 px-2 py-1 text-[10px] text-red-300 transition hover:border-red-400 hover:bg-red-500/15"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default TodosPage;

import React from "react";
import { fetchTodos } from "@/lib/todos";
import TodoHeader from "@/app/components/todos/TodoHeader";
import TodoForm from "@/app/components/todos/TodoForm";
import TodoList from "@/app/components/todos/TodoList";

const TodosPage = async () => {
  const todos = await fetchTodos();

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl p-6 sm:p-8 space-y-6">

        <TodoHeader totalTasks={todos.length} />

        <TodoForm />

        <TodoList todos={todos} />

      </section>
    </main>
  );
};

export default TodosPage;