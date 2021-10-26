import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchMovies from './components/SearchMovies';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Header/>
    </MovieProvider>
  );
}

export default App;
