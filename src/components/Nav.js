import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import AddMovie from "./AddMovie";
import 'boxicons';
import { useState } from "react";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

const Nav = () => {
    const [searchString, setSearchString] = useState('');

    const handleSearchStringChange = e => {
        setSearchString(e.target.value);
    }

    return (
        <Router>
            <div className='nav-container'>
                <div style={{ 'display': 'flex', 'align-items': 'center', 'gap': '30px' }}>
                    <Link className='link' to='/'>Home</Link>
                    <SearchBar
                        handleSearchStringChange={handleSearchStringChange} />
                </div>
                <div>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/contactus'>Contact Us</Link>
                </div>
            </div>
            <Switch>
                <Route path='/about'><About /></Route>
                <Route path='/contactus'><ContactUs /></Route>
                <Route path='/'>
                    <AddMovie />
                    <Movies searchString={searchString} />
                </Route>
            </Switch>
        </Router>
    );
}

export default Nav;