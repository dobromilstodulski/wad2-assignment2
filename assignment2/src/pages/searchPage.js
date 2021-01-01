import React, { useContext, useState } from "react";
import { SearchContext } from "../contexts/searchContext";

const SearchPage = () => {
  const context = useContext(SearchContext)
  const [searchString, setSearchString] = useState("");

  async function postSearch(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const search = () => {
    postSearch('/api/search?query={avengers}', { query: "avengers" })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
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

export default SearchPage;
