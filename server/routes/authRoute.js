const express = require('express');
// import registerController from ('../controller/authController');
const registerController = require('../controllers/authController');

const router = express.Router();

// router.get('/register', function(req, res) {
// 	res.status(200).json({
// 		status: 200,
// 		message: 'register get route'
// 	});
// });

router.post('/register', registerController);

module.exports = router;
