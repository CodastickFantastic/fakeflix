import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchData, setSearchData] = useState("");

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
