import React from "react";
import "./DateInput.css";

function DateInput() {
  return (
    <div className="date-input">
      <p>Placeholder</p>
      <select>
        <option value="">Month</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <select>
        <option value="">Day</option>
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <select>
        <option value="">Year</option>
        {Array.from({ length: 2025 - 1900 + 1 }, (_, i) => (
          <option key={1900 + i} value={1900 + i}>
            {1900 + i}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DateInput;
