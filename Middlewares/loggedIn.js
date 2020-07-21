/* eslint-disable no-underscore-dangle */
import status from 'http-status';
import Model from '../Models/Model';

const isLoggedIn = (req, res, next) => {
	console.log(req.user);
	if (req.user) {
		// here first we check if user exists in db then we will process furthur, other wise we will send logged in :false status
		Model.UserModel.findOne({ _id: req.user._id })
			.then(user => {
				if (user) {
					next();
				} else {
					res.status(400).send({
						Message: 'User not exists in our system',
						loggedIn: false,
					});
				}
			})
			.catch(err => {
				res.status(status.INTERNAL_SERVER_ERROR).send({
					Message: 'Internal Server Error, Try Again Later!',
					err,
				});
			});
	} else {
		res.status(400).send({
			Message: 'User not logged In.',
			loggedIn: false,
		});
	}
};

export default {
	isLoggedIn,
};
