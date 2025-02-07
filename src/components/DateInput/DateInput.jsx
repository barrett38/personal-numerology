import React from "react";
import "./DateInput.css";

function DateInput() {
  return (
    <div>
      {/* still working on */}
      <div className="date-input">
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
            <option key={2025 - i} value={2025 - i}>
              {2025 - i}
            </option>
          ))}
        </select>
        <button>Submit</button>
        <p>We are our numbers....</p>
      </div>
    </div>
  );
}

export default DateInput;

// looki in to Reset.CSS
