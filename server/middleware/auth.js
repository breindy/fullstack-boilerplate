const bcrypt = require('bcryptjs');
const User = require('../models').User;

function passwordsMatch(passwordSubmitted, storedPassword) {
	return bcrypt.compareSync(passwordSubmitted, storedPassword);
}
