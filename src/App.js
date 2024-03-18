/** @format */

import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import TodoLists from "./TodoLists";

export default function App() {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodo(e) {
    e.preventDefault();

    if (query.length < 1) return alert("Todo can not be empty ");
    const newTodo = {
      todoName: query,
      id: Date.now().toLocaleString(),
    };

    setTodos([...todos, newTodo]);
    setQuery("");
  }

  return (
    <main className="main-container">
      <Section>
        <Header />
        <Form
          query={query}
          setQuery={setQuery}
          onAddTodo={addTodo}
          todos={todos}
        />
        <TodoLists todoLists={todos} setTodos={setTodos} />

        {todos.length > 0 && <Footer todos={todos} setTodos={setTodos} />}
      </Section>
    </main>
  );
}
