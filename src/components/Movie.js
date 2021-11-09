import styleConstants from "../constants/styleConstants";

const Movie = ({ movie, serialNo }) => {
    const rowColor = serialNo % 2 === 0 ?
        styleConstants.color.tableRowLight :
        styleConstants.color.tableRowDark;

    const color = serialNo % 2 === 0 ?
        '004F11' : 'white';
    return (
        <tr style={{ 'backgroundColor': rowColor, filter: 'brightness(100%)', 'color': color}}>
            <td className='serialNo'>{serialNo}</td>
            <td>{movie.name}</td>
            <td>{movie.year}</td>
            <td>{movie.rating}</td>
            <td>{movie.genre}</td>
        </tr>
    );
}

export default Movie;