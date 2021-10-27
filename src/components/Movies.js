import Movie from "./Movie";

const Movies = ({ movies, header }) => {
    return (
        <div>
            <h3>{header}</h3>
                <table className='center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie =>
                            <Movie movie={movie} />
                        )}
                    </tbody>
                </table>
            
        </div>
    );
}

export default Movies;