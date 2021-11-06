import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider >
      <div className='app'>
        <Main />
        <Footer />
      </div>
    </MovieProvider>
  );
}

export default App;
