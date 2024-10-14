import { useTodoContext } from "../TodoContext";
import "./Footer.css";

export function Footer() {
  const { Todo: todo } = useTodoContext();
  const completedTodoCount = todo.filter((item) => item.completed).length;

  return (
    <>
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>Finished {completedTodoCount}</span> / total {todo.length}
        </span>
        <button className="btn btn-danger">Delete Finished Tasks</button>
      </div>
    </>
  );
}
