import React, { useState } from "react";
import ToDoitem from "./ToDoitem";

function App() {
  const [newText, setText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
    //arr.push_back(newText);
  }
  function handleOnClick() {
    setItems((prevValue) => {
      return [...prevValue, newText];
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="inputText"
          type="text"
          value={newText}
        />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <ToDoitem todoItem={todoItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
