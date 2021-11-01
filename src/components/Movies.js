import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";
import 'boxicons';
import TableHeader from "./TableHeader";

const titles = ['Name', 'Year', 'Rating', 'Genre'];

const Movies = ({ searchString }) => {
    const [movies] = useContext(MovieContext);
    const [searchedMovies, setSearchedMovies] = useState(movies);
    const [sortConfig, setSortConfig] = useState({
        key: 'Name',
        order: 'asc'
    });
    
    useEffect(() => {
        if (searchString) {
            setSearchedMovies(movies.filter(movie =>
                movie.name.toLowerCase().includes(searchString.trim().toLowerCase())));
        } else {
            setSearchedMovies(movies);
        }
    }, [searchString, movies])

    const handleSort = (sortButtonId) => {
        const order = sortButtonId.toLowerCase().includes('asc') ? 'asc' : 'des';
        let key;
        if(sortButtonId.toLowerCase().includes('name')) {
            key = 'Name';
        } else if(sortButtonId.toLowerCase().includes('year')) {
            key ='Year';
        } else if(sortButtonId.toLowerCase().includes('rating')) {
            key = 'Rating';
        } else if(sortButtonId.toLowerCase().includes('genre')) {
            key = 'Genre';
        }
        setSortConfig({key, order});
        console.log(sortConfig)
    }

    const searchResults =
        searchedMovies.length === 0 ? <h4>No Movies Found</h4> :
            <table className='center'>
                <thead>
                    <tr>
                        {titles.map(title =>
                            <th>
                                <TableHeader title={title} sortConfig={sortConfig} handleSort={handleSort} />
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {searchedMovies.map(movie =>
                        <Movie movie={movie} />
                    )}
                </tbody>
            </table>

    return (
        <div>
            <h3>Movies</h3>
            {searchResults}
        </div>
    );
}

export default Movies;