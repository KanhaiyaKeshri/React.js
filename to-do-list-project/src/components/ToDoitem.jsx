import React, { useState } from "react";

function ToDoitem(props) {
  const [isClicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.todoItem}
      </li>
    </div>
  );
}
export default ToDoitem;
