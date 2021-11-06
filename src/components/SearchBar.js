import { useLocation } from "react-router";
import 'boxicons';

const SearchBar = ({ searchString, handleSearchStringChange }) => {

    const { pathname } = useLocation();

    const onSearchStringChange = e => {
        e.preventDefault();
        handleSearchStringChange(e.target.value);
    }

    const searchBar = pathname.split('/')[1] === '' ?
        <div id='search-bar'>
            <box-icon name='search' id='search' color='lightgray'></box-icon>
            <input
                type='text'
                id='search-input'
                value={searchString}
                onChange={onSearchStringChange}
                placeholder='  search movies' />
        </div>
        :
        null;

    return searchBar;
}

export default SearchBar;