import React, { useState } from "react";

function InputArea(props) {
  const [newText, setText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={newText} />
      <button
        onClick={() => {
          props.onClickAdd(newText);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
