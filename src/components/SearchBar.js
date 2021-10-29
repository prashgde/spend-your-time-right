import { useLocation } from "react-router";

const SearchBar = ({ handleSearchStringChange }) => {

    const { pathname } = useLocation();

    const searchBar = pathname.split('/')[1] === '' ?
        <div id='search-bar'>
            <box-icon name='search' id='search' color='lightgray'></box-icon>
            <input
                type='text'
                id='search-input'
                onChange={handleSearchStringChange}
                placeholder='  search movies' />
        </div>
        :
        null;

    return searchBar;
}

export default SearchBar;