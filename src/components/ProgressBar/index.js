import React from "react";
import "./progress.css";

const ProgressBar = ({
    progressValue = 0,
    label,
    variant = "linear",
    min = 0,
    max = 100,
    bgColor = "greenyellow",
    heading,
  }) => {

  const progress = Math.min(Math.max(progressValue, min), max);

  return (
    <div>
      <h2>{heading}</h2>
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label}
        className="container"
      >
        {variant === "linear" ? (
          <div
            className="progressBar"
            style={{
              transform: `scaleX(${progressValue / 100})`,
              backgroundColor: bgColor,
            }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};

export default ProgressBar;
