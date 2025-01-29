import React from "react";
import "./Todo.css";

const Todo = ({ task, toggleTask, deleteTask, markTask }) => {
  return (
    <li
      className={`todo-item ${task.completed ? "completed" : ""} ${
        task.marked ? "marked" : ""
      }`}
    >
      <span onClick={toggleTask} className="task-text">
        {task.text}
      </span>
      <div className="todo-buttons">
        <button onClick={markTask} className="mark-button">
          {task.marked ? "Unmark" : "Mark"}
        </button>
        <button onClick={deleteTask} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;