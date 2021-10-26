import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Movie from "./Movie";

const Movies = ({ movies, header }) => {
    return (
        <div>
            <h3>{header}</h3>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Year</strong></TableCell>
                            <TableCell><strong>Rating</strong></TableCell>
                            <TableCell><strong>Genre</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map(movie =>
                            <Movie movie={movie} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Movies;