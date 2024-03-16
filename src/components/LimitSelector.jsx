import { useState } from "react";

const LimitSelector = ({ onLimitChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value !== "" && !isNaN(value)) {
      const limit = Math.min(Math.max(value, 1), 10);
      if (value > 10) {
        alert("The maximum limit is 10.");
        setInputValue("");
      }
      onLimitChange(limit);
    }
  };

  return (
    <input
      id="limiter"
      type="number"
      value={inputValue}
      onChange={handleChange}
      placeholder="Set limit (1-10)"
    />
  );
};

export default LimitSelector;
