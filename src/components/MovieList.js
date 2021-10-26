import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";
import Movies from "./Movies";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <Movies movies={movies} header='Movies'/>
    );
}

export default MovieList;