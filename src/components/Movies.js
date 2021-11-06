import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";
import 'boxicons';
import TableHeader from "./TableHeader";

const titles = ['Name', 'Year', 'Rating', 'Genre'];

const Movies = ({ searchString }) => {
    const [movies] = useContext(MovieContext);
    const [searchedMovies, setSearchedMovies] = useState(movies);

    let serialNo = 1;

    const [sortConfig, setSortConfig] = useState({
        key: 'rating',
        order: 'des'
    });

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
            setSearchedMovies(movies.filter(movie =>
                movie.name.toLowerCase().includes(searchString.trim().toLowerCase()))
                .sort((movie1, movie2) => compareMovies(movie1, movie2))
            );
        } else {
            setSearchedMovies([...movies].sort((movie1, movie2) => compareMovies(movie1, movie2)));
        }
    }, [searchString, movies, sortConfig])


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
                    {searchedMovies.map(movie =>
                        <Movie movie={movie} serialNo={serialNo++}/>
                    )}
                </tbody>
            </table>

    return (
        <div>
            <h3>Movies</h3>
            {searchResults}
        </div>
    );
}

export default Movies;