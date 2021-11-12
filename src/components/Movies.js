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
    
    const imdbSwitchText = imdbChecked ? `Switch to Prasanna's top 100` : `Switch to imdb top 100 voted`;

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
                        readOnly
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
    const [selectedMovies, setSelectedMovies] = useState(movies);
    const [searchedMovies, setSearchedMovies] = useState(selectedMovies);
    
    const [sortConfig, setSortConfig] = useState({
        key: 'rating',
        order: 'des'
    });

    useEffect(() => {
        (async () => {
            if(imdbChecked) {
                try {
                    const url = 'http://localhost:3001/api/top100';
                    const response = await fetch(url);
                    const top100 = await response.json();
                    setSelectedMovies(top100);
                } catch(err) {
                    setSelectedMovies([])
                }
            } else {
                setSelectedMovies([...movies])
            }
        })();
    }, [imdbChecked, movies]);

    useEffect(() => {
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
    }, [imdbChecked, searchString, movies, sortConfig, selectedMovies]);

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
        searchedMovies.length === 0 || selectedMovies.length === 0? <h4>No Movies Found</h4> :
            <table>
                <thead>
                    <tr>
                        <th className='serialNo'>No.</th>
                        {titles.map((title, index) =>
                            <th key={index} className='table-info-column'>
                                <TableHeader title={title} sortConfig={sortConfig} handleSort={handleSort} />
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {searchedMovies.map((movie, index) =>
                        <Movie key={index} movie={movie} serialNo={index + 1} />
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