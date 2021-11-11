import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";
import 'boxicons';
import TableHeader from "./TableHeader";

const titles = ['Name', 'Year', 'Rating', 'Genre'];

const MoviesHeader = () => {
    const { imdbCheckedValue } = useContext(MovieContext);
    const [imdbChecked, setImdbChecked] = imdbCheckedValue;

    const switchStyle = imdbChecked ?
        { 'backgroundColor': 'lightblue', 'transition': '.5s' } :
        { 'backgroundColor': 'lightgreen', 'transition': '.5s' };
    
    const imdbSwitchText = imdbChecked ? `Switch to Prasanna's top 100` : `Switch to imdb top 100`;

    const handleImdbChecked = () => {
        setImdbChecked(prevImdbChecked => !prevImdbChecked);
    }
    
    return (
        <div>
            <h3>Movies</h3>
            <div className='switch-container'>
                <div className='switch' style={switchStyle} onClick={() => handleImdbChecked()}>
                    <input
                        type='checkbox'
                        id='imdb'
                        name='imdb'
                        checked={imdbChecked}
                        onChange={handleImdbChecked}
                    />
                </div>
                <label htmlFor='imdb'>{imdbSwitchText}</label>
            </div>
        </div>
    );
}

const Movies = ({ searchString }) => {
    const { movieValue, imdbCheckedValue } = useContext(MovieContext);
    const [imdbChecked] = imdbCheckedValue;
    const [movies] = movieValue;

    const [searchedMovies, setSearchedMovies] = useState(movies);
    
    const [sortConfig, setSortConfig] = useState({
        key: 'rating',
        order: 'des'
    });

    useEffect(() => {
        const selectedMovies = imdbChecked ?
            [{
                name: 'The Shawshank Redemption',
                year: 1994,
                rating: 9.3,
                genre: 'drama'
            },
            {
                name: 'The Godfather',
                year: 1972,
                rating: 9.2,
                genre: 'crime, drama'
            },
            {
                name: 'The Dark Knight',
                year: 2008,
                rating: 9.0,
                genre: 'action, crime, drama'
            },
            {
                name: 'The Godfather: Part II',
                year: 1974,
                rating: 9.0,
                genre: 'crime, drama'
            },
            {
                name: 'The Shawshank Redemption',
                year: 1994,
                rating: 9.3,
                genre: 'drama'
            },
            {
                name: 'The Godfather',
                year: 1972,
                rating: 9.2,
                genre: 'crime, drama'
            },
            {
                name: 'The Dark Knight',
                year: 2008,
                rating: 9.0,
                genre: 'action, crime, drama'
            },
            {
                name: 'The Godfather: Part II',
                year: 1974,
                rating: 9.0,
                genre: 'crime, drama'
            }, {
                name: 'The Shawshank Redemption',
                year: 1994,
                rating: 9.3,
                genre: 'drama'
            },
            {
                name: 'The Godfather',
                year: 1972,
                rating: 9.2,
                genre: 'crime, drama'
            },
            {
                name: 'The Dark Knight',
                year: 2008,
                rating: 9.0,
                genre: 'action, crime, drama'
            },
            {
                name: 'The Godfather: Part II',
                year: 1974,
                rating: 9.0,
                genre: 'crime, drama'
            }] :
            [...movies];

        const compareMovies = (movie1, movie2) => {
            switch (typeof movie1[sortConfig.key]) {
                case 'number':
                    const result = movie1[sortConfig.key] - movie2[sortConfig.key]
                    return sortConfig.order === 'asc' ? result : -result;

                case 'string':
                    return sortConfig.order === 'asc' ?
                        movie1[sortConfig.key].localeCompare(movie2[sortConfig.key]) :
                        -(movie1[sortConfig.key].localeCompare(movie2[sortConfig.key]));

                default:
                    return 0;
            }
        }

        if (searchString) {
            setSearchedMovies(selectedMovies.filter(movie =>
                movie.name.toLowerCase().includes(searchString.trim().toLowerCase()))
                .sort((movie1, movie2) => compareMovies(movie1, movie2))
            );
        } else {
            setSearchedMovies(selectedMovies.sort((movie1, movie2) => compareMovies(movie1, movie2)));
        }
    }, [imdbChecked, searchString, movies, sortConfig]);

    const handleSort = (sortButtonId) => {
        const order = sortButtonId.toLowerCase().includes('asc') ? 'asc' : 'des';
        let key;
        if (sortButtonId.toLowerCase().includes('name')) {
            key = 'name';
        } else if (sortButtonId.toLowerCase().includes('year')) {
            key = 'year';
        } else if (sortButtonId.toLowerCase().includes('rating')) {
            key = 'rating';
        } else if (sortButtonId.toLowerCase().includes('genre')) {
            key = 'genre';
        }

        setSortConfig(previousSortConfig => ({ ...previousSortConfig, key, order }));
        //setSortConfig({ key, order });
    }

    const searchResults =
        searchedMovies.length === 0 ? <h4>No Movies Found</h4> :
            <table>
                <thead>
                    <tr>
                        <th className='serialNo'>No.</th>
                        {titles.map(title =>
                            <th className='table-info-column'>
                                <TableHeader title={title} sortConfig={sortConfig} handleSort={handleSort} />
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {searchedMovies.map((movie, index) =>
                        <Movie movie={movie} serialNo={index + 1} />
                    )}
                </tbody>
            </table>

    return (
        <div className='movies'>
            <MoviesHeader/>
            <div>
                {searchResults}
            </div>
        </div>
    );
}

export default Movies;