import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import './cssFiles/Search.css';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [searched, setSearched] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e, username);
    setSearched(true); 
  };

  return (
    <form
      className={`search-form ${searched ? "" : "centered"}`} 
      onSubmit={handleSubmit}
    >
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="search-icon-container">
          <IoSearch className="search-icon" />
        </div>
        <input
          type="search"
          id="default-search"
          className="search-input"
          placeholder="ENTER GITHUB USERNAME ...."
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
