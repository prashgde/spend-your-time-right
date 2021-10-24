import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

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
        if(!movies.find(movie => movie.name.toLowerCase() === name.trim().toLowerCase())) {
            setMovies(previousMovies => [...previousMovies, {name, year, rating, genre}]);
        }
    }

    return (
        <div>
            <h3>Add a Movie</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input type='text' id='name-input' value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    Year: <input type='text' id='year-input' value={year} onChange={handleYearChange}/>
                </div>
                <div>
                    Rating: <input type='text' id='rating-input' value={rating} onChange={handleRatingChange}/>
                </div>
                <div>
                    Genre: <input type='text' id='genre-input' value={genre} onChange={handleGenreChange}/>
                </div>
                <div>
                    <input type='submit' value='Add'/>
                </div>
            </form>
        </div>
    );
}

export default AddMovie;