import React from "react";


const SearchBar = ({ handleInput, search, word, movieNotFound }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder=" Search Movies..."
        onChange={handleInput}
        onKeyPress={search}
        value={word}
      />
      {movieNotFound.length !== 0 && <span style={{ color: '#ed1c24' }}> No Results For "{movieNotFound}" </span>}
    </div>
  )
}


export default SearchBar;