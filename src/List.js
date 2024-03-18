/** @format */

import { useState } from "react";

function TodoList({ todoLists, onHandleDelete }) {
  const { todoName, id } = todoLists;
  const [isCompleted, setisCompleted] = useState(false);

  function toggleCompleted() {
    setisCompleted((isc) => !isc);
  }

  function handleDelete(id) {
    onHandleDelete(id);
  }

  return (
    <li>
      <button
        className={`btns ${isCompleted ? "btn-open " : ""}`}
        onClick={toggleCompleted}
      >
        {isCompleted && <img src="./img/checkmark-outline.svg" alt="img" />}
      </button>
      {todoName}
      <button className="btn-close" onClick={() => handleDelete(id)}>
        <img src="./img/close-outline.svg" alt="close" />
      </button>
    </li>
  );
}

export default TodoList;
