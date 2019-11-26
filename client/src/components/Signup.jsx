import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.scss';

class Signup extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

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
	onSubmit = (e) => {
		e.preventDefault();
		const newUser = this.state;
		// console.log('New user information: ', newUser);

		this.setState({
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		});

		//pass new user info to backend to store into the database
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Acesss-Control-Allow-Methods': '*'
		};

		// fetch('localhost:3001/api/auth/register', newUser)
		axios
			.post('/api/auth/register', newUser, {
				headers: headers
			})
			.then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
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
