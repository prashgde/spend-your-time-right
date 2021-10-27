import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import LoginControl from "./LoginControl";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import 'boxicons';
import { useState } from "react";
import SearchMovies from "./SearchMovies";

const Nav = () => {
    const [searchString, setSearchString] = useState('');

    const handleSearchStringChange = e => {
        e.preventDefault();
        setSearchString(e.target.value);
    }

    return (
        <Router>
            <div className='nav-container'>
                <div style={{'display': 'flex', 'align-items': 'center'}}>
                    <Link className='link' to='/'>Home</Link>
                    <box-icon name='search' id='search' color='white'></box-icon>
                    <input type='text' id='search-input' onChange={handleSearchStringChange}/>
                </div>
                <div>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/contactus'>Contact Us</Link>
                    <Link className='link' to='/login'>Login</Link>
                </div>
            </div>
            <Switch>
                <Route path='/about'><About /></Route>
                <Route path='/contactus'><ContactUs /></Route>
                <Route path='/login'><LoginControl /></Route>
                <Route path='/'>
                    <AddMovie />
                    <MovieList />
                    <SearchMovies searchString={searchString}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Nav;