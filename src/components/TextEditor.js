import React, { useState } from "react";

const TextEditor = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplay] = useState("");
  const [last, setLast] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const Append = (word) => {
    const temp = displayText !== "" ? `${displayText} ${word}` : `${word}`;
    setLast((old) => [...old, displayText]);
    console.log(temp);
    setDisplay(temp);
    setInputText("");
  };

  const Delete = () => {
    const temp = displayText.split(" ").slice(0, -2).join(" ");
    setLast((old) => [...old, displayText]);
    setDisplay(temp);
  };

  const Undo = () => {
    const temp = [...last];
    setDisplay(temp.pop());
  };

  return (
    <>
      <div className="controls">
        <input
          className="word-input"
          value={inputText}
          type="text"
          data-testid="word-input"
          onChange={handleChange}
        />
        <button
          id="btn-1"
          data-testid="append-button"
          onClick={() => Append(inputText)}
        >
          Append
        </button>
        <button id="btn-2" data-testid="undo-button" onClick={Undo}>
          Undo
        </button>
        <button id="btn-3" data-testid="print-button">
          Print
        </button>
        <button id="btn-4" data-testid="delete-button" onClick={Delete}>
          Delete
        </button>
      </div>
      <div className="text-field" data-testid="text-field">
        {displayText.toString()}
      </div>
    </>
  );
};

export default TextEditor;
