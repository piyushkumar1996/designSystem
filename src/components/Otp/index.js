import React from "react";
import OtpInput from "./OtpInput";

const OtpContainer = () => {
  const handleSubmit = (otpValue, cb) => {
    setTimeout(() => {
      if (otpValue) return cb(true);
      else return cb(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Enter the Otp</h2>
      <OtpInput
        length={4}
        type={"number"}
        onSubmit={handleSubmit}
        error={(err) => (
          <p style={{ textAlign: "center", color: "red" }}>{err}</p>
        )}
        resend={false}
        errMsg={"Otp is invalid"}
        timer={30}
      />
    </div>
  );
};

export default OtpContainer;
