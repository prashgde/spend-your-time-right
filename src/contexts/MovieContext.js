import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "Iron Man",
            year: 2008,
            genre: "superhero",
            rating: 10
        },
        {
            name: "Inception",
            year: 2010,
            genre: "sci-fi",
            rating: 10
        },
        {
            name: "Crazy, Stupid, Love",
            year: 2011,
            genre: "romance",
            rating: 8.5
        },
        {
            name: "The Internship",
            year: 2013,
            genre: "comedy",
            rating: 10
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}