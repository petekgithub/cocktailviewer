import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { SearchBarProps } from "@/interfaces/interfaces";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a cocktail..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
