import search_icon from "../../assets/search.png";
import { useSearch } from "../../Components/SearchContext"
const SearchBar = () => {
    
  const { searchValue, setSearchValue } = useSearch();
    return ( 
        <>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={search_icon} alt="search button" />
          <input type="text" placeholder="Search" className="font-bold w-[80%] hover:border-transparent focus:outline-none py-2" value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
        </>
     );
}
 
export default SearchBar;