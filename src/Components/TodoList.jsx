import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ tasks, toggleTask, deleteTask, markTask }) => {
  return (
    <ul className="todo-list">
      {tasks.length === 0 ? (
        <li>No tasks available. Add a new task!</li>
      ) : (
        tasks.map((task, index) => (
            <Todo
            key={index}
            task={task}
            toggleTask={() => toggleTask(index)}
            deleteTask={() => deleteTask(index)}
            markTask={() => markTask(index)}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
