import React, { useState } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        plus
      </button>
    </div>
  );
}

export default TodoInput;
