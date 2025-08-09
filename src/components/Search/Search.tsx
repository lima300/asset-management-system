import { useEffect, useState } from "react";
import "./Search.css";
import searchIcon from "../../assets/Search.svg";

interface SearchProps {
  value?: string;
  onChange: (value: string) => void;
  debounceMs?: number;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  debounceMs = 500,
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  // Update local input value when external value changes
  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  // Debounce the onChange calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(inputValue);
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [inputValue, onChange, debounceMs]);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="serach-container">
      <input
        type="text"
        placeholder="Serach asset or location"
        onChange={onInputChange}
        value={inputValue}
      />
      <div className="search-icon">
        <img height="21px" width="21px" src={searchIcon} alt="search" />
      </div>
    </div>
  );
};
