import { createContext, useState } from "react";
import initialMovies from './movies.json';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState(initialMovies);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}