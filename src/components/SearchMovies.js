import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movies from "./Movies";

const SearchMovies = ({ searchString }) => {
    const [movies, setMovies] = useContext(MovieContext);
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        if (searchString)
            if (searchString.length >= 1) {
                setSearchedMovies(movies.filter(movie =>
                    movie.name.toLowerCase().includes(searchString.trim().toLowerCase())));
            }
    }, [searchString, movies])

    return (
        <Movies movies={searchedMovies} header='Search'/>
    );
}

export default SearchMovies;