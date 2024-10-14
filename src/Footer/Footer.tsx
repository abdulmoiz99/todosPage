import { useTodoContext } from "../TodoContext";
import "./Footer.css";

export function Footer() {
  const { Todo: todo, setTodo } = useTodoContext();
  const completedTodoCount = todo.filter((item) => item.completed).length;

  const updateAllTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    const updatedTodo = todo.map((item) => ({
      ...item,
      completed: isChecked,
    }));
    setTodo(updatedTodo);
  };

  return (
    <>
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={updateAllTodo}/>
        </label>
        <span>
          <span>Finished {completedTodoCount}</span> / total {todo.length}
        </span>
        <button className="btn btn-danger">Delete Finished Tasks</button>
      </div>
    </>
  );
}
