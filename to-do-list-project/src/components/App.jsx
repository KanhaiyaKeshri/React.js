import React, { useState } from "react";
import ToDoitem from "./ToDoitem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newText) {
    setItems((prevValue) => {
      return [...prevValue, newText];
    });
  }
  function deleteItem(id) {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClickAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoitem
                key={index}
                id={index}
                todoItem={todoItem}
                onClicked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
