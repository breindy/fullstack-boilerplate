import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.scss';

const initialState = {
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
	usernameError: '',
	emailError: '',
	passwordError: '',
	confirmError: ''
};

class Signup extends Component {
	state = initialState;

	getUsername = (event) => {
		this.setState({
			username: event.target.value
		});
	};

	getEmail = (event) => {
		this.setState({
			email: event.target.value
		});
	};

	getPassword = (event) => {
		this.setState({
			password: event.target.value
		});
	};

	confirmPassword = (event) => {
		this.setState({
			confirmPassword: event.target.value
		});
	};

	validate = () => {
		let { username, email, password } = this.state;
		let usernameError = '';

		/*username validation
		* 1. username must not be taken (unique)
		* 2. username must be longer than 3 characters
		*/
		if (username.length <= 3) {
			usernameError = 'Username must be longer than 3 characters';
			this.setState({
				usernameError
			});
		} else {
			usernameError = '';
			this.setState({
				usernameError
			});
		}
	};

	validateInput = () => {
		let usernameError = '';
		let emailError = '';
		let passwordError = '';
		let confirmError = '';

		if (!this.state.username) {
			usernameError = 'Username cannot not be blank';
		}
		if (this.state.username.length <= 3) {
			usernameError = 'Username must be longer than 3 characters';
		}
		if (!this.state.email.includes('@')) {
			emailError = 'Invalid Email';
		}
		if (this.state.password < 3) {
			passwordError = 'Password must be longer than 3 characters';
		}
		if (!this.state.password) {
			passwordError = 'Password cannot be blank';
		}

		if (this.state.password <= 3) {
			passwordError = 'Password must be longer than 3 characters';
		}

		if (this.state.password != this.state.confirmPassword) {
			confirmError = 'Passwords do not match';
		}

		if (emailError || usernameError || passwordError || confirmError) {
			this.setState({ emailError, usernameError, passwordError, confirmError });
			return false;
		}

		return true;
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { username, email, password } = this.state;
		const newUser = {
			username,
			email,
			password
		};

		const isValid = this.validateInput();
		if (isValid) {
			console.log('New user information: ', newUser);
			this.setState(initialState);
		}

		//pass new user info to backend to store into the database
		// const headers = {
		// 	'Content-Type': 'application/json',
		// 	'Access-Control-Allow-Origin': '*',
		// 	'Access-Control-Allow-Headers': 'Content-Type',
		// 	'Acesss-Control-Allow-Methods': '*'
		// };

		// axios
		// 	.post('/api/auth/register', newUser, {
		// 		headers: headers
		// 	})
		// 	.then(
		// 		(response) => {
		// 			console.log(response);
		// 		},
		// 		(error) => {
		// 			console.log(error);
		// 		}
		// 	);

		//Success message, redirect to Login
	};
	render() {
		return (
			<div className="login-form">
				<form>
					<h2>Sign Up</h2>
					<p>Please fill in this form to create an account.</p>
					<hr />

					<div className="form-group">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-user" />
							</span>
							<input
								type="text"
								className="form-control"
								name="username"
								placeholder="Username"
								required="required"
								value={this.state.username}
								onChange={this.getUsername}
							/>
						</div>
						<div className="errorValidation">{this.state.usernameError}</div>
					</div>

					<div className="form-group">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-paper-plane" />
							</span>
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Email Address"
								required="required"
								value={this.state.email}
								onChange={this.getEmail}
							/>
						</div>
						<div className="errorValidation">{this.state.emailError}</div>
					</div>

					<div className="form-group">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-lock" />
							</span>
							<input
								type="password"
								className="form-control"
								name="password"
								placeholder="Password"
								required="required"
								value={this.state.password}
								onChange={this.getPassword}
							/>
						</div>
						<div className="errorValidation">{this.state.passwordError}</div>
					</div>

					<div className="form-group">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-lock" />
							</span>
							<input
								type="password"
								className="form-control"
								name="confirm_password"
								placeholder="Confirm Password"
								required="required"
								value={this.state.confirmPassword}
								onChange={this.confirmPassword}
							/>
						</div>
						<div className="errorValidation">{this.state.confirmError}</div>
					</div>
					<div className="form-group">
						<button onClick={(e) => this.onSubmit(e)} type="submit" className="btn btn-primary btn-lg">
							Sign Up
						</button>
					</div>
				</form>
				<div className="text-center">
					Already have an account?{' '}
					<Link to="/login">
						<a>Login here</a>
					</Link>
				</div>
			</div>
		);
	}
}

export default Signup;
