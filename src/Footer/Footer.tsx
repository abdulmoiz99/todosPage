import { Todo } from "../Model/Todo";
import "./Footer.css";

type PropsType = {
  todo: Todo[];
};
export function Footer(props: PropsType) {
  const { todo } = props;
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
