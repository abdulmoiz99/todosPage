import { useState } from "react";
import { useTodoContext } from "../TodoContext";
import { Todo } from "../Model/Todo";
import "./Header.css";

export function Header() {
  const { Todo, setTodo } = useTodoContext();
  const [todoTask, setTodoTask] = useState("");

  const addNewEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTodo: Todo = {
        id: Todo.length !== 0 ? Todo[Todo.length - 1].id + 1 : 1,
        task: todoTask,
        completed: false,
      };

      setTodo([...Todo, newTodo]);
      setTodoTask("");
    }
  };

  return (
    <>
      <div className="todo-header">
        <input
          name="todoTask"
          type="text"
          placeholder="Enter task name"
          onKeyDown={addNewEvent}
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
        />
      </div>
    </>
  );
}
