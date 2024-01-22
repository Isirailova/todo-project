import React, { useState } from "react";
import "./toDoItem.style.css";

const ToDoItem = ({
  toDoText,
  toDoId,
  isCompleted,
  deleteTodo,
  completedToDo,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCheckboxChange = () => {
    completedToDo(toDoId);
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    deleteTodo(toDoId);
    setIsButtonClicked(true);
  };

  return (
    <div
      className={`todo-item ${isChecked || isButtonClicked ? "red-text" : ""}`}
    >
      <input
        type="checkbox"
        className="checkbox-custom"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      <p
        style={{
          textDecoration: `${
            isCompleted || isChecked ? "line-through 3px solid green" : "none"
          }`,
          color: "inherit",
        }}
      >
        {toDoText}
      </p>
      <button onClick={handleButtonClick}>X</button>
    </div>
  );
};

export default ToDoItem;
