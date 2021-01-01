import React, { useState, createContext } from "react";
import { search } from "../api/movie-api";

export const SearchContext = createContext(null);

const SearchContextProvider = (props) => {
  const [searchString, setSearchString] = useState("");

  const searchMovie = async (searchString) => {
    const result = await search(searchString);
    setSearchString(searchString);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  return (
    <SearchContext.Provider
      value={{
        searchString,
        searchMovie,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;