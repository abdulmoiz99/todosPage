import "./Item.css";

type PropsType = {
  todoText: string;
};

export const Item = (props: PropsType) => {
  const { todoText } = props;
  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
          <span>{todoText}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          Delete
        </button>
      </li>
    </>
  );
};
