const express = require('express');
const models = require('../models');
const bcrypt = require('bcryptjs');

const User = models.User;

function register(req, res) {
	//Get user information from the request's body and checks if it exists in teh database
	//Check if email/username exists in the database
	var userEmail = req.body.email;
	var userAlias = req.body.username;
	var userPassword = req.body.password;

	User.findOne({
		where: {
			email: userEmail
		}
	}).then((emailExists) => {
		if (emailExists) {
			res.status(409).json({
				status: 409,
				message: '❌ Email taken. Please register under another email.',
				info: userEmail
			});
		}
	});

	User.findOne({
		where: {
			username: userAlias
		}
	}).then((usernameExists) => {
		if (usernameExists) {
			res.status(409).json({
				status: 409,
				message: '❌ Username unavailable, please choose another.',
				info: userAlias
			});
		}
	});

	//If username or email is not taken, hash password and add to the database
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(userPassword, salt);

	User.create({
		username: userAlias,
		email: userEmail,
		password: hash
	})
		.then((user) => {
			var registeredUser = {
				id: user.id,
				username: user.username,
				email: user.email
			};
			res.status(201).json({
				status: 201,
				message: '💯 Account successfully created!',
				info: registeredUser
			});
		})
		.catch((error) => {
			res.status(400).json({
				message: error.message
			});
		});
}

module.exports = register;
