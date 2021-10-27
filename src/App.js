import './App.css';
import Header from './components/Header';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Header/>
    </MovieProvider>
  );
}

export default App;
