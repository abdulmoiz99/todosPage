import { useTodoContext } from "../TodoContext";
import "./Footer.css";

export function Footer() {
  const { Todo: todo, setTodo } = useTodoContext();
  return (
    <>
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>Finished 0</span> / total {todo.length}
        </span>
        <button className="btn btn-danger">Delete Finished Tasks</button>
      </div>
    </>
  );
}
