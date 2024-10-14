import "./Item.css";

type PropsType = {
  todoText: string;
  completed: boolean;
  updateTodo: () => void;
};

export const Item = (props: PropsType) => {
  const { todoText, completed, updateTodo } = props;
  return (
    <>
      <li>
        <label>
          <input type="checkbox" onChange={updateTodo} checked={completed} />
          <span>{todoText}</span>
        </label>
      </li>
    </>
  );
};
