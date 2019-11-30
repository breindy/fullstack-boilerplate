const express = require('express');
const models = require('../models');
const bcrypt = require('bcryptjs');

const User = models.User;

function login(req, res) {
	//Get user information from the request's body and checks if it exists in teh database
	//Check if email/username exists in the database
	var userAlias = req.body.username;
	var userPassword = req.body.password;

	User.findOne({
		where: {
			username: userAlias
		}
	})
		.then((usernameExists) => {
			if (usernameExists) {
				//compare password
				const passwordsMatch = bcrypt.compareSync(userPassword, usernameExists.password);
				if (passwordsMatch) {
					res.status(202).json({
						status: 202,
						message: '✅ Successful Login.',
						info: req.body
					});
				} else {
					res.status(401).json({
						status: 401,
						message: '❌ Wrong password.',
						info: req.body
					});
				}
			} else if (!usernameExists) {
				res.status(404).json({
					status: 404,
					message: '❌ Invalid username.'
				});
			}
		})
		.catch((error) => {
			res.status(400).json({
				status: 400,
				message: error.message
			});
		});
}

module.exports = login;
