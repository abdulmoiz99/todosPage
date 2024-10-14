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
  }, [setTodo]);

  const updateTodo = (id: number, completed: boolean) => {
    const newTodo = todo!.map((todo) => {
      if (todo.id === id) return { ...todo, completed };
      else return todo;
    });
    setTodo(newTodo);
  };

  return (
    <>
      <ul className="todo-main">
        {todo.map(({ id, task, completed }) => (
          <Item
            key={id}
            todoText={task}
            completed={completed}
            updateTodo={() => updateTodo(id, !completed)}
          />
        ))}
      </ul>
    </>
  );
};
