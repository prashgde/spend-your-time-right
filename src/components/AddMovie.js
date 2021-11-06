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

let movieId = 4;

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('');

    const [nameError, setNameError] = useState('');
    const [yearError, setYearError] = useState('');
    const [ratingError, setRatingError] = useState('');

    const minYear = 1800;
    const currentYear = new Date().getFullYear();
    const yearInputHelperText = `Year (${minYear} - ${currentYear})`
    const ratingInputHelperText = `Rating (1 - 10)`


    const handleNameChange = e => {
        const inputName = e.target.value;

        if(!inputName) {
            setNameError('');
        }
        else if(inputName.trim() === '') {
            setNameError('Please enter a valid name');
        } else {
            setNameError('');
        }
        
        setName(inputName);
    }

    const handleYearChange = e => {
        const inputYear = e.target.value;

        if(!inputYear)
            setYearError('');
        else {
            if (!/^\d+$/.test(inputYear) || (inputYear < minYear || inputYear > currentYear)) {
                setYearError(`Please enter a valid year`);
            } else {
                setYearError('');
            }
        }

        setYear(inputYear);

    }

    const handleRatingChange = e => {
        const inputRating = e.target.value;

        if(!inputRating) {
            setRatingError('');
        } else {
            if (!/^\d(\.\d+)?$/.test(inputRating) || (inputRating < 1 || inputRating > 10)) {
                setRatingError(`Please enter a valid rating`);
            } else {
                setRatingError('');
            }
        }

        setRating(e.target.value);
    }

    const handleGenreChange = e => {
        setGenre(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!movies.find(movie => movie.name.toLowerCase() === name.trim().toLowerCase())) {
            setMovies(previousMovies => [...previousMovies, { name, year, rating, genre, id: movieId++ }]);
        }
    }

    const handleReset = () => {
        setName('');
        setRating('');
        setYear('');
        setGenre('');
    }

    return (
        <div className='add-movie-container'>
            <h3>Add a Movie</h3>
            <form onSubmit={handleSubmit} className='add-movie-form'>
                <div className='add-movie'>
                    <div>
                        <div>
                        <input
                            type='text'
                            id='name-input'
                            value={name}
                            required
                            placeholder='Name'
                            onChange={handleNameChange} />
                        </div>
                        <div className='input-error'>
                            {nameError}
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                type='text'
                                id='year-input'
                                value={year}
                                required
                                placeholder={yearInputHelperText}
                                onChange={handleYearChange} />
                        </div>
                        <div className='input-error'>
                            {yearError}
                        </div>
                    </div>
                    <div>
                        <div>
                        <input
                            type='text'
                            id='rating-input'
                            value={rating}
                            required
                            placeholder={ratingInputHelperText}
                            onChange={handleRatingChange} />
                        </div>
                        <div className='input-error'>
                            {ratingError}
                        </div>
                    </div>
                    <div>
                        <input list='genres'
                            type='text'
                            id='genre-input'
                            value={genre}
                            required
                            placeholder='Genre'
                            onChange={handleGenreChange} />
                            <datalist id='genres'>
                                <option value='superhero' />
                                <option value='sci-fi' />
                                <option value='comedy' />
                                <option value='romcom' />
                                <option value='romance' />
                                <option value='action' />
                                <option value='thriller' />
                                <option value='mystery' />
                                <option value='crime' />
                                <option value='fantasy' />
                                <option value='drama' />
                                <option value='horror' />
                            </datalist>
                    </div>
                    <div style={styles.buttonContainer}>
                        <input type='submit' value='Add' className='button' style={styles.addButton} />
                        <input type='reset' value='Reset' className='button' style={styles.resetButton} onClick={handleReset} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddMovie;