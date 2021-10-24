import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import SearchMovies from './components/SearchMovies';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <AddMovie/>
      <MovieList/>
      <SearchMovies/>
    </MovieProvider>
  );
}

export default App;
