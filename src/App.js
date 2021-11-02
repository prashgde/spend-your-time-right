import './App.css';
import Main from './components/Main';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Main/>
    </MovieProvider>
  );
}

export default App;
