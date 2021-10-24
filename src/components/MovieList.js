import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h3>Movies</h3>
            <table className='center'>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Genre</th>
                </tr>
                {movies.map(movie =>
                    <Movie movie={movie} />
                )}
            </table>
        </div>
    );
}

export default MovieList;