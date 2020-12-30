import React, { useState } from "react";
import { search } from "../api/movie-api";

const searchPage = () => {
    const [searchString, setSearchString] = useState("");

const search = async (searchString) => {
    const result = await search(searchString);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  return (
    <>
      <h2>Search page</h2>
      <p>You can search for a movie here</p>
      <input value={searchString} placeholder="Query" onChange={e => {
        setSearchString(e.target.value);
      }}></input><br />
      <button onClick={search}>Search</button>
    </>
  );
};

export default searchPage;
