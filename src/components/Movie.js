const Movie = ({movie, serialNo}) => {
    return (
        <tr>
            <td className='serialNo'>{serialNo}</td>
            <td>{movie.name}</td>
            <td>{movie.year}</td>
            <td>{movie.rating}</td>
            <td>{movie.genre}</td>
        </tr>
    );
}

export default Movie;