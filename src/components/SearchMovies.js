import { Grid, TextField } from "@mui/material";
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
        </div>
    );
}

export default SearchMovies;