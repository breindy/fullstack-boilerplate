import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">nullProjects</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Router>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/'><a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about'><a className="nav-link text-light" href="#">About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signup'><a className="nav-link text-light" href="#">Sign Up</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login'><a className="nav-link text-light" href="#"><button className="btn btn-sm btn-light">Login</button></a></Link>
                            </li>
                        </ul>
                    </div>
                    </Router>
                </nav>
         );
    }
}
 
export default NavBar;