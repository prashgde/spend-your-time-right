import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const styles = {
    buttonContainer: {
        display: 'flex',
        gap: '5px'
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
                    <input 
                    type='text' 
                    id='name-input' 
                    value={name} 
                    required 
                    placeholder='Name' 
                    onChange={handleNameChange}/>
                </div>
                <div>
                    <input 
                    type='text' 
                    id='year-input' 
                    value={year}
                    required 
                    placeholder='Year' 
                    onChange={handleYearChange}/>
                </div>
                <div>
                    <input 
                    type='text' 
                    id='rating-input' 
                    value={rating}
                    required 
                    placeholder='Rating' 
                    onChange={handleRatingChange}/>
                </div>
                <div>
                    <input 
                    type='text' 
                    id='genre-input' 
                    value={genre}
                    required 
                    placeholder='Genre'
                    onChange={handleGenreChange}/>
                </div>
                <div style={styles.buttonContainer}>
                    <input type='submit' value='Add' className='button' style={styles.addButton}/>
                    <input type='reset' value='Reset' className='button' style={styles.resetButton} onClick={handleReset}/>
                </div>
            </form>
        </div>
    );
}

export default AddMovie;