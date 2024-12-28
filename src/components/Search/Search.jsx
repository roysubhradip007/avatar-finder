import useDebounce from "../../hooks/useDebounce";
import "./search.css"
function Search({updateSearch}) {
    
    const debounce = useDebounce((e) => updateSearch(e.target.value))

    return (
        <div className="search-wrapper">
            <input type="text" placeholder="Enter your username" onChange={(e) => debounce(e)}/>
        </div>
    )
}

export default Search;