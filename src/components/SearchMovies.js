import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";

const SearchMovies = () => {
    const [name, setName] = useState(null);
    const [movies, setMovies] = useContext(MovieContext);
    const [searchedMovies, setSearchedMovies] = useState([]);

    const handleNameChange = e => {
        e.preventDefault();
        setName(e.target.value);
    }

    useEffect(() => {
        if (name)
            if (name.length >= 1) {
                setSearchedMovies(movies.filter(movie =>
                    movie.name.toLowerCase().includes(name.trim().toLowerCase())));
            }
    }, [name, movies])

    return (
        <div>
            <h3>Search</h3>
            <form>
                <div>
                    <input type='text' id='search-input' value={name} onChange={handleNameChange} />
                </div>
                <div id='sr'></div>
                <div>
                    <h4>Search Results</h4>
                    <table className='center'>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Genre</th>
                        </tr>
                        {searchedMovies.map(movie =>
                            <Movie movie={movie} />
                        )}
                    </table>
                </div>
            </form>
        </div>
    );
}

export default SearchMovies;