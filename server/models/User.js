'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: {
				type: DataTypes.STRING,
				required: true
			},
			email: {
				type: DataTypes.STRING,
				required: true
			},
			password: {
				type: DataTypes.STRING,
				required: true
			}
		},
		{}
	);
	User.associate = function(models) {
		// associations can be defined here
	};
	return User;
};
