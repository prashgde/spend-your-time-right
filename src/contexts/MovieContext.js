import { createContext, useState } from "react";
import initialMovies from './movies.json';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState(initialMovies);
    const [imdbChecked, setImdbChecked] = useState(false);

    return (
        <MovieContext.Provider
            value={{
                movieValue: [movies, setMovies],
                imdbCheckedValue: [imdbChecked, setImdbChecked]
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}