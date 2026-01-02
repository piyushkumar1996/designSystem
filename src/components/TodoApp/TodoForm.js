import React, { useState, useRef } from "react";

const TodoForm = ({ dispatch }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (!content) return;
    dispatch({
      type: "ADD_TODO",
      payload: { id: Math.random(), content, status: "active" },
    });
    setContent("");
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div role="group" aria-label="Create todo form">
      <h3>Create Todo</h3>
      <input
        ref={inputRef}
        type="text"
        value={content}
        onChange={handleChange}
        aria-label={content || "Enter todo"}
        onKeyDown={handleKeyDown}
      />
      <button aria-label="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TodoForm;
