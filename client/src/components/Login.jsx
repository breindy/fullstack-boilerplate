import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.scss';

const initialState = {
	username: '',
	password: '',
	usernameError: '',
	passwordError: ''
};

class Login extends Component {
	state = initialState;

	getUsername = (event) => {
		this.setState({
			username: event.target.value
		});
	};

	getPassword = (event) => {
		this.setState({
			password: event.target.value
		});
	};

	validateInput = () => {
		let usernameError = '';
		let passwordError = '';

		if (!this.state.username) {
			usernameError = 'Username cannot not be blank';
		}
		if (!this.state.password) {
			passwordError = 'Password cannot be blank';
		}
		if (usernameError || passwordError) {
			this.setState({ usernameError, passwordError });
			return false;
		}
		return true;
	};

	onSubmit = (event) => {
		event.preventDefault();
		let { username, password } = this.state;
		const existingUser = {
			username,
			password
		};

		const isValid = this.validateInput();
		if (isValid) {
			this.setState(initialState);

			//send to backend to verify credentials
			const headers = {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type',
				'Acesss-Control-Allow-Methods': '*'
			};

			axios
				.post('/api/auth/login', existingUser, {
					headers: headers
				})
				.then(
					(response) => {
						console.log(response);
						if (response.status === 202) {
							//REDIRECT TO A NEW PAGE
							console.log('Logged in successfully!');
						} else {
							console.log(response);
							// console.log('Login unsuccessful');
						}
					},
					(error) => {
						console.log(error);
					}
				);
		}
	};

	render() {
		return (
			<div className="signup-form">
				<h2>Login</h2>

				<form>
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
						<button type="submit" onClick={(e) => this.onSubmit(e)} className="btn btn-primary btn-lg">
							Login
						</button>
					</div>
				</form>
				<div className="text-center">
					Don't have an account?{' '}
					<Link to="/signup">
						<a>Sign up here</a>
					</Link>
				</div>
			</div>
		);
	}
}

export default Login;
