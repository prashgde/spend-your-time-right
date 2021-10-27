import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";

const Movies = ({ searchString }) => {
    const [movies] = useContext(MovieContext);
    const [searchedMovies, setSearchedMovies] = useState(movies);

    useEffect(() => {
        if (searchString) {
            setSearchedMovies(movies.filter(movie =>
                movie.name.toLowerCase().includes(searchString.trim().toLowerCase())));
        } else {
            setSearchedMovies(movies);
        }
    }, [searchString, movies])

    const searchResults =
        searchedMovies.length === 0 ? <h4>No Movies Found</h4> :
            <table className='center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Genre</th>
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