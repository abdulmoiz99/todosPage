import { Item } from "../Item/Item";
import './List.css'

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
