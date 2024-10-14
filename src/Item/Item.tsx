import { useTodoContext } from "../TodoContext";
import "./Item.css";

type PropsType = {
  id: number;
  todoText: string;
  completed: boolean;
  updateTodo: () => void;
};

export const Item = (props: PropsType) => {
  const { id, todoText, completed, updateTodo } = props;
  const { Todo: todo, setTodo } = useTodoContext();

  const deleteTodo = () => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };

  return (
    <>
      <li>
        <label>
          <input type="checkbox" onChange={updateTodo} checked={completed} />
          <span>{todoText}</span>
        </label>
        <button className="btn btn-danger" onClick={deleteTodo}>
          Delete
        </button>
      </li>
    </>
  );
};
