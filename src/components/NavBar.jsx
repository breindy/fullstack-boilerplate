import React, { Component } from 'react';
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

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#"><button className="btn btn-sm btn-light">Login</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
         );
    }
}
 
export default NavBar;