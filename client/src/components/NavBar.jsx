import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './NavBar.scss';

import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Error from './Error';
import Modal from './Modal';

class NavBar extends Component {
	state = {};
	render() {
		return (
			<Router>
				<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="/">
						nullProjects
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/">
									<a className="nav-link">
										Home <span className="sr-only">(current)</span>
									</a>
								</Link>
							</li>

							<li className="nav-item">
								<Link to="/about">
									<a className="nav-link">About</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/signup">
									<a className="nav-link">Sign Up</a>
								</Link>
							</li>

							<li className="nav-item">
								<Link to="/login">
									<a className="nav-link text-light">
										<button className="btn btn-sm btn-light">Login</button>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/signup" exact>
						<Signup />
					</Route>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/modal" exact>
						<Modal
							image={require('../assets/success.png')}
							width={150}
							title={'Success!'}
							content={'Account registered successfully.'}
							additional={'Login here.'}
						/>
					</Route>
					<Route path="/">
						<Error />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default NavBar;
