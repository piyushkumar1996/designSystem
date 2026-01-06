import React, { useEffect, useRef, useState } from "react";
import style from "./input.module.css";

/*
  type='text' only maxLength has an impact
  handle values other than number with regex and reset
  key="Backspace" handle empty the field and if empty moves focus to previous field
*/

const OtpInput = ({ length = 6, onSubmit, type, error, errMsg }) => {
  const [inputField, setInputField] = useState(
    Array.from({ length: length }, (_, i) => i)
  );
  const inputRef = useRef([]);
  const [showError, setShowError] = useState(false);

  const resetOtpField = () => {
    inputRef.current.forEach((input) => {
      input.value = "";
    });
    inputRef.current[0].focus();
  };

  const handleChange = (e, i) => {
    const value = e.target.value;

    if (!value) return;

    if (type === "number" && !/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    if (i !== length - 1) {
      inputRef.current[i + 1].focus();
    } else {
      let otp = parseInt(
        inputRef.current.reduce((acc, curr) => acc + curr.value, "")
      );
      const submitCallBack = (result) => {
        if (result) resetOtpField();
        else setShowError(!result);
      };
      onSubmit(otp, submitCallBack);
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && i !== 0) {
      if (inputRef.current[i].value) {
        inputRef.current[i].value = "";
      } else if (inputRef.current[i - 1]) {
        inputRef.current[i - 1].focus();
      }
    }
  };

  return (
    <>
      <div className={style.inputContainer}>
        {inputField.map((item, i) => (
          <input
            key={i}
            className={`${style.inputField} ${showError && style.errorField}`}
            type={"text"}
            inputMode={type === "number" ? "numeric" : undefined}
            pattern="[0-9]*"
            maxLength={1}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(el) => (inputRef.current[i] = el)}
            autoFocus={i === 0}
          />
        ))}
      </div>
      {showError && error(errMsg)}
    </>
  );
};

export default OtpInput;
