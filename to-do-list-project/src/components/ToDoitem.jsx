import React from "react";

function ToDoitem(props) {
  return (
    <div
      onClick={() => {
        props.onClicked(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}
export default ToDoitem;
