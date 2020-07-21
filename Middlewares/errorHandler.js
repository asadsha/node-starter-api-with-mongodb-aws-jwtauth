/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
	console.log(err);
	/* eslint-enable no-unused-vars */
	// const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
	res.send({
		message: err.message,
		// eslint-disable-next-line quotes
		stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
	});
}

export default errorHandler;
