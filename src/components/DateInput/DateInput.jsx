import React, { useState } from "react";
import "./DateInput.css";

function DateInput() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [message, setMessage] = useState("");

  const reduceNumber = (num) => {
    while (num > 9 && ![11, 22, 33].includes(num)) {
      num = num
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
  };

  // Handle submission
  const handleSubmit = () => {
    if (!month || !day || !year) {
      alert("Please select a valid date.");
      return;
    }

    // Convert selections to numbers
    const monthNum = parseInt(month);
    const dayNum = parseInt(day);
    const yearNum = parseInt(year);

    // First reduction method
    const reducedMonth = reduceNumber(monthNum);
    let reducedDay = dayNum;
    if (![11, 22].includes(dayNum) && dayNum !== 29) {
      reducedDay = reduceNumber(dayNum);
    } else if (dayNum === 29) {
      reducedDay = 11;
    }
    const reducedYear = reduceNumber(yearNum);
    const finalResult1 = reduceNumber(reducedMonth + reducedDay + reducedYear);

    // Second reduction method
    const allDigitsSum = `${month}${day}${year}`
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
    const finalResult2 = reduceNumber(allDigitsSum);

    // Check if one of the methods resulted in a master number
    if ([11, 22, 33].includes(finalResult1)) {
      setResult1(finalResult1);
      setResult2(finalResult1 === 11 ? 2 : finalResult1 === 22 ? 4 : 6);
      setMessage(
        `Since Method 1 resulted in ${finalResult1}, Method 2 is rejected and set to ${result2}.`
      );
    } else if ([11, 22, 33].includes(finalResult2)) {
      setResult1(finalResult2 === 11 ? 2 : finalResult2 === 22 ? 4 : 6);
      setResult2(finalResult2);
      setMessage(
        `Since Method 2 resulted in ${finalResult2}, Method 1 is rejected and set to ${result1}.`
      );
    } else {
      setResult1(finalResult1);
      setResult2(finalResult2);
      setMessage("");
    }
  };

  return (
    <div className="date-input">
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Month</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Day</option>
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Year</option>
        {Array.from({ length: 2025 - 1900 + 1 }, (_, i) => (
          <option key={2025 - i} value={2025 - i}>
            {2025 - i}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Submit</button>

      {message && <p>{message}</p>}
      {result1 !== null && result2 !== null && (
        <div>
          <p>Reduction Method 1: {result1}</p>
          <p>Reduction Method 2: {result2}</p>
        </div>
      )}
    </div>
  );
}

export default DateInput;
