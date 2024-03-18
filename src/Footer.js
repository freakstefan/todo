/** @format */

export default function Footer({ todos, setTodos }) {
  function handleDeleteAll() {
    setTodos([]);
  }
  return (
    <footer className="footer">
      <p className="p3">
        You have <strong className="item-count">{todos.length}</strong> items on
        your List
      </p>
      <button className="btn2" onClick={handleDeleteAll}>
        clear all
      </button>
    </footer>
  );
}
