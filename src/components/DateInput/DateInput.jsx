import React from "react";
import "./DateInput.css";

function DateInput() {
  return (
    <div className="date-input">
      <input type="text" placeholder="Month" />
      <input type="text" placeholder="Day" />
      <input type="text" placeholder="Year" />
    </div>
  );
}

export default DateInput;
