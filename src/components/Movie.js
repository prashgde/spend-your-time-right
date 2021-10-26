import { TableCell, TableRow } from "@mui/material";

const Movie = ({ movie }) => {
    return (
        <TableRow>
            <TableCell>{movie.name}</TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>{movie.rating}</TableCell>
            <TableCell>{movie.genre}</TableCell>
        </TableRow>
    );
}

export default Movie;