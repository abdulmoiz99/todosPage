import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./List.css";
import { Todo } from "../Model/Todo";

export const List = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const getList = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodo(data);
    };

    getList();
  }, []);

  return (
    <>
      <ul className="todo-main">
        {todo.map(({ id, task }) => (
          <Item key={id} todoText={task} />
        ))}
      </ul>
    </>
  );
};
