import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Grid, TextField } from "@mui/material";

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState(null);
    const [year, setYear] = useState(1000);
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState('unknown');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleYearChange = e => {
        setYear(e.target.value);
    }

    const handleRatingChange = e => {
        setRating(e.target.value);
    }

    const handleGenreChange = e => {
        setGenre(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!movies.find(movie => movie.name.toLowerCase() === name.trim().toLowerCase())) {
            setMovies(previousMovies => [...previousMovies, { name, year, rating, genre }]);
        }
    }

    return (
        <Grid
            container 
            justifyContent="center"
        >
            <Grid item xs={4}>
                <form>
                    <h3>Add a Movie</h3>
                    <Grid 
                        container 
                        spacing={2} 
                        justifyContent="center"
                    >
                        <Grid item>
                            <TextField
                                required
                                id="input-name"
                                label="Name"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-year"
                                label="Year"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-rating"
                                label="Rating"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-genre"
                                label="Genre"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default AddMovie;