import React, { useState } from "react";
import ToDoItem from "../toDoItem/TodoItem";
import Popup from "../popup/Popup";
import { v4 as uuidv4 } from "uuid";
import "./checkList.style.css";

const CheckList = () => {
  const [toDo, setToDo] = useState({ text: "", id: "", isCompleted: false });
  const [toDoList, setToDoList] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const onChangeHandler = (e) => {
    setToDo({ text: e.target.value, id: "", isCompleted: false });
  };

  const onAddClick = () => {
    setToDoList([...toDoList, { ...toDo, id: uuidv4() }]);
    setToDo({ text: "", id: "" });
  };

  const deleteTodo = (id) => {
    setToDoList([...toDoList.filter((el) => el.id !== id)]);
  };

  const completeToDo = (id) => {
    const newToDoList = toDoList.map((el) => {
      if (el.id === id) {
        return { ...el, isCompleted: !el.isCompleted };
      } else {
        return el;
      }
    });

    setToDoList([...newToDoList]);
  };

  // Show the popup when clearAll is clicked
  const clearAll = () => {
    setIsPopupVisible(true);
  };

  const pressYes = () => {
    setToDoList([]);
  };

  const pressNo = () => {
    setIsPopupVisible(false);
  };

  const completedCount = toDoList.filter((el) => el.isCompleted).length;
  const totalCount = toDoList.length;

  return (
    <div className="box">
      <h2>📝 TODO APP 📝</h2>
      <div className="input-box">
        <input
          name="toDo"
          value={toDo.text}
          placeholder="Write here..."
          id="inputBx"
          onChange={onChangeHandler}
        />
        <button onClick={onAddClick}>✚</button>
      </div>
      <div className="todolist-view">
        {toDoList.map((el) => (
          <ToDoItem
            key={el.id}
            toDoText={el.text}
            toDoId={el.id}
            isCompleted={el.isCompleted}
            deleteTodo={deleteTodo}
            completedToDo={completeToDo}
          />
        ))}
        {toDoList.length > 0 && (
          <div className="count">
            <p className="completed-count">
              {`${completedCount} of ${totalCount} items done`}
            </p>
            <button onClick={clearAll} className="clear-all-btn">
              Clear all
            </button>
            {isPopupVisible && <Popup yesClick={pressYes} noClick={pressNo} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckList;
