import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchFor, setSearchFor] = useState("");
  const [searchData, setSearchData] = useState("");

  const toggleSearchSection = () => setSearchFor((prev) => !prev);

  return (
    <SearchContext.Provider value={{ searchFor, searchData, setSearchData, toggleSearchSection }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
