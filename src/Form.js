/** @format */

export default function Form({ query, setQuery, todos, onAddTodo }) {
  function handleQuery(e) {
    setQuery(e.target.value);
  }
  return (
    <form className="button" onSubmit={onAddTodo}>
      <input
        type="text"
        className="input"
        placeholder="Enter Your new todo"
        value={query}
        onChange={handleQuery}
      />

      <button className="btn okBtn">Add todo</button>
      <p className="p2"></p>
    </form>
  );
}
