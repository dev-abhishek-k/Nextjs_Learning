import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="mt-3 space-y-1.5 rounded-2xl bg-slate-900/60 p-3 sm:p-4 border border-slate-800/80">
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-1 py-6 text-center text-slate-500 text-sm">
          <span className="text-lg">Nothing on your plate.</span>

          <span className="text-xs text-slate-500">
            Start by writing your first task above.
          </span>
        </div>
      ) : (
        <ul className="space-y-1.5">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;