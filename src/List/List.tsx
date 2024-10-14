import { useEffect } from "react";
import { Item } from "../Item/Item";
import { useTodoContext } from "../TodoContext";
import "./List.css";

export const List = () => {
  const { Todo: todo, setTodo } = useTodoContext();

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
