import { useState, useEffect, useRef } from "react";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const handleShortCutKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleShortCutKeyDown);
    return () => {
      document.removeEventListener("keydown", handleShortCutKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue.trim()) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, onSearch]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Search places..."
    />
  );
};

export default Search;
