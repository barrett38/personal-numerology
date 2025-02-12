import React, { useState } from "react";
import "./DateInput.css";

function DateInput() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [finalResult, setFinalResult] = useState(null);
  const [reducedDay, setReducedDay] = useState(null);
  const [message, setMessage] = useState("");

  // Function to reduce numbers to a single digit or master number (11, 22, 33)
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

    // Reduce the month and year
    const reducedMonth = reduceNumber(monthNum);
    const reducedYear = reduceNumber(yearNum);

    // Reduce the day according to rules
    let reducedDayNum = dayNum;
    if (![11, 22].includes(dayNum) && dayNum !== 29) {
      reducedDayNum = reduceNumber(dayNum);
    } else if (dayNum === 29) {
      reducedDayNum = 11;
    }
    setReducedDay(reducedDayNum); // Store reduced day number

    // First reduction method
    const finalResult1 = reduceNumber(
      reducedMonth + reducedDayNum + reducedYear
    );

    // Second reduction method
    const allDigitsSum = `${month}${day}${year}`
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
    const finalResult2 = reduceNumber(allDigitsSum);

    // Determine which method is accepted
    if ([11, 22, 33].includes(finalResult1)) {
      setFinalResult(finalResult1);
      setMessage(`Method 1 is accepted with result ${finalResult1}.`);
    } else if ([11, 22, 33].includes(finalResult2)) {
      setFinalResult(finalResult2);
      setMessage(`Method 2 is accepted with result ${finalResult2}.`);
    } else {
      setFinalResult(finalResult1);
      setMessage(`Defaulting to Method 1 result: ${finalResult1}.`);
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

      {finalResult !== null && (
        <div>
          <p>{message}</p>
          <p>Final Result: {finalResult}</p>
          <p>Reduced Day of the Month: {reducedDay}</p>
        </div>
      )}
    </div>
  );
}

export default DateInput;
