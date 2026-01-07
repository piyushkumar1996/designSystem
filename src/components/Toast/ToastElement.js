import React, { useEffect, useRef, useState } from "react";
import "./toast.css";

const ToastElement = ({ message = "" }) => {
  const [toastVisible, setToastVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setToastVisible(true);

    timerRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className={`toast_container ${toastVisible ? "showToast" : ""}`}>
      <button onClick={() => setToastVisible(false)}>X</button>
      <p>{message}</p>
    </div>
  );
};

export default ToastElement;
