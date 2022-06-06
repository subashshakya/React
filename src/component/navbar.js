// import {useState} from 'react';//useState is called hooks
//anything that changes its value overtime has 'State'

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>the dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New book</Link>
            </div>
        </nav>
    );
}


export default Navbar;