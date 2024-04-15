"use client";

import { useState } from "react";
import Button from "./Button";

const Todos = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todoValue.trim()) {
      setTodos((prevTodos) => [...prevTodos, todoValue.trim()]);
      setTodoValue("");
    }
  };

  return (
    <>
      <label>
        New Todo
        <input
          className="border border-black text-black"
          onChange={handleChange}
          value={todoValue}
        />
      </label>

      <Button onClick={handleAddTodo}>Add Todo</Button>

      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => (
            <li key={`${todo}-${index}`}>{todo}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Todos;
