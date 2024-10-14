import { Item } from "../Item/Item";
import { Todo } from "../Model/Todo";
import "./List.css";

type PropsType = {
  todo: Todo[];
};

export const List = (props: PropsType) => {
  const { todo } = props;

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
