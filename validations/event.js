import status from 'http-status';

const addEvent = (req, res, next) => {
	const { description, name, date } = req.body;

	if (!description || !name || !date) {
		res.status(status.BAD_REQUEST);
		next(
			new Error('name, description and date Must be Defined in request body'),
		);
	} else {
		next();
	}
};

export default { addEvent };
