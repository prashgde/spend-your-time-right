import { blue } from '@mui/material/colors';
import { Box } from "@mui/system";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import LoginControl from "./LoginControl";
import MovieList from "./MovieList";

const nav = {
    container: {
        backgroundColor: blue[500],
        padding: '20px'
    }
}

const Nav = () => {
    return (
        <Router>
            <Box style={nav.container}>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/contactus'>Contact Us</Link>
                <Link className='link' to='/login'>Login</Link>
            </Box>
            <Switch>
                <Route path='/about' ><About /></Route>
                <Route path='/contactus' ><ContactUs /></Route>
                <Route path='/login' ><LoginControl /></Route>
                <Route path='/' ><MovieList /></Route>
            </Switch>
        </Router>
    );
}

export default Nav;