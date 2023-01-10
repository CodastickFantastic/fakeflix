import { createContext, useState } from "react";
import SearchSection from "../components/UI/SearchSection/SearchSection";

const SearchContext = createContext()

export function SearchContextProvider(props) {
    const [searchFor, setSearchFor] = useState(false)
    const [searchData, setSearchData] = useState("");

    function toggleSearchSection(){
        setSearchFor(prev => !prev)
    }


    return(
        <SearchContext.Provider value={{searchFor, searchData,setSearchData, toggleSearchSection}}>
            {searchFor && <SearchSection toSearch={searchData} />}
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext