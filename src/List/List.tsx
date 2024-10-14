import { Item } from "../Item/Item";

export function List() {
  return (
    <>
      <ul className="todo-main">
        <Item />
        <Item />
      </ul>
    </>
  );
}
