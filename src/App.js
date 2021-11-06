import './App.css';
import FootNotes from './components/FootNotes';
import Main from './components/Main';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Main/>
      <FootNotes/>
    </MovieProvider>
  );
}

export default App;
