import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const addmovie = {
    buttonContainer: {
        display: 'flex',
        gap: '10px'
    },
    addButton: {
        backgroundColor: '#5eeb34'
    }, resetButton: {
        backgroundColor: '#779091'
    }
}

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('');

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

    const handleReset = () => {
        //e.preventDefault();
        setName('');
        setRating('');
        setYear('');
        setGenre('');
    }

    return (
        <div>
            <h3>Add a Movie</h3>
            <form onSubmit={handleSubmit} className='add-movie'>
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
                <div style={addmovie.buttonContainer}>
                    <input type='submit' value='Add' className='button' style={addmovie.addButton}/>
                    <input type='reset' value='Reset' className='button' style={addmovie.resetButton} onClick={handleReset}/>
                </div>
            </form>
        </div>
    );
}

export default AddMovie;