/** @format */

import List from "./List";
export default function TodoLists({ todoLists, setTodos }) {
  function handleDelete(id) {
    console.log(id);

    const newTodos = todoLists.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  }
  return (
    <ul className="todolist">
      {todoLists.map((todo) => (
        <List todoLists={todo} onHandleDelete={handleDelete} key={todo.id} />
      ))}
    </ul>
  );
}
