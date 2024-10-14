export function Item() {
  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
          <span>yyyy</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          Delete
        </button>
      </li>
    </>
  );
}
