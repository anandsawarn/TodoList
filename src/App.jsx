import React, { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { text, completed: false, marked: false },
    ]);
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const markTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, marked: !task.marked } : task
      )
    );
  };
  return (
    <div className="app-container">
      <Navbar />
      <h2>To-Do List</h2>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        markTask={markTask}
      />
    </div>
  );
};

export default App;
