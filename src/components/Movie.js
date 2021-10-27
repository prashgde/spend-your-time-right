const Movie = ({movie}) => {
    return (
        <tr>
            <td>{movie.name}</td>
            <td>{movie.year}</td>
            <td>{movie.rating}</td>
            <td>{movie.genre}</td>
        </tr>
    );
}

export default Movie;