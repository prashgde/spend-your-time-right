import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";
import 'boxicons';
import SortableTableHeader from "./SortableTableHeader";

const Movies = ({ searchString }) => {
    const [movies] = useContext(MovieContext);
    const [searchedMovies, setSearchedMovies] = useState(movies);

    useEffect(() => {
        if (searchString) {
            setSearchedMovies(movies.filter(movie =>
                movie.name.toLowerCase().includes(searchString.trim().toLowerCase())));
        } else {
            setSearchedMovies(movies);
        }
    }, [searchString, movies])

    const searchResults =
        searchedMovies.length === 0 ? <h4>No Movies Found</h4> :
            <table className='center'>
                <thead>
                    <tr>
                        <th>
                            <SortableTableHeader title='Name' active={true} />
                        </th>
                        <th>
                            <SortableTableHeader title='Year' active={false} />
                        </th>
                        <th>
                            <SortableTableHeader title='Rating' active={false} />
                        </th>
                        <th>
                            <SortableTableHeader title='Genre' active={false} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {searchedMovies.map(movie =>
                        <Movie movie={movie} />
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