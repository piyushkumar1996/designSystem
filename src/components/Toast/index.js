import React from "react";
import ToastElement from "./ToastElement";
import ToastWrapper from "./ToastWrapper";

const Toast = () => {
  return (
    <div>
      <ToastElement message={"Successs !!"} />
      <ToastWrapper />
    </div>
  );
};

export default Toast;
