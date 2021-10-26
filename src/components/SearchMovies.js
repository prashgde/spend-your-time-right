import { Grid, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";
import Movies from "./Movies";

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
            <Grid
                container
                justifyContent="center"
            >
                <Grid item xs={4}>
                    <form>
                        <h3>Search</h3>
                        <Grid
                            container
                            justifyContent="center"
                        >
                            <Grid item>
                                <TextField
                                    required
                                    id="input-search"
                                    label="Search Movies"
                                    fullWidth
                                    onChange={handleNameChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Movies movies={searchedMovies} header='Search Results' />
        </div>
    );
}

export default SearchMovies;