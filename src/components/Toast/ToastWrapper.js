import React, { useState, useEffect } from "react";
import "./toast.css";

const MAX_TOAST = 3;
const TOAST_TIMER = 5000;

const ToastWrapper = (props) => {
  const [toastMessages, setToastMessages] = useState([]);
  const [messageQueue, setMessageQueue] = useState([]);

  const addToastMessage = (message) => {
    const newMessage = { id: Math.random(), message };
    if (toastMessages.length < MAX_TOAST) {
      setToastMessages((prev) => [...prev, newMessage]);
      setTimeout(() => {
        handleDelete(newMessage.id);
      }, TOAST_TIMER);
    } else {
      setMessageQueue((prev) => [...prev, newMessage]);
    }
  };

  const scheduleRemoval = (id) => {
    setTimeout(() => handleDelete(id), TOAST_TIMER);
  };

  const handleDelete = (id) => {
    setToastMessages((prev) => prev.filter((item) => item.id !== id));
  };

  // whenever one is removed and space opens up, pull from queue
  useEffect(() => {
    if (toastMessages.length < MAX_TOAST && messageQueue.length) {
      const [next, ...rest] = messageQueue;
      setMessageQueue(rest);
      setToastMessages((prev) => [...prev, next]);
      scheduleRemoval(next.id);
    }
  }, [toastMessages, messageQueue]);

  return (
    <div>
      <button onClick={() => addToastMessage("toast 1")}>Push message 1</button>
      <button onClick={() => addToastMessage("toast 2")}>Push message 2</button>
      <button onClick={() => addToastMessage("toast 3")}>Push message 3</button>
      <button onClick={() => addToastMessage("toast 4")}>Push message 4</button>
      {toastMessages.map(({ message, id }, i) => (
        <div
          key={id}
          className={`toast_container showToast`}
          style={{ bottom: `${i * 100}px` }}
        >
          <button onClick={() => handleDelete(id)}>X</button>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
};

export default ToastWrapper;
