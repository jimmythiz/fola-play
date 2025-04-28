import { createContext, useContext, useState, useEffect } from "react";
import { useDebounce } from "./UseDebounce";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const debouncedSearchValue = useDebounce(searchValue, 2000); 

  useEffect(() => {
    if (searchValue.trim() !== debouncedSearchValue.trim()) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    if (searchValue.trim().length > 0) {
        navigate("/");}
    
  }, [searchValue, debouncedSearchValue]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, debouncedSearchValue, isSearching }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
