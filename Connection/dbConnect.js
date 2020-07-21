import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bold from 'chalk';

dotenv.config();

const { cyan, yellow, red } = bold;

const connected = cyan;
const error = yellow;
const disconnected = red;

// export this function and imported by server.js

const Connect = () => {
	mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
	mongoose.set('useFindAndModify', false);
	mongoose.set('useCreateIndex', true);

	mongoose.connection.on('connected', () => {
		console.log(
			connected(`Mongoose default connection is open to ${process.env.DB_URI}`),
		);
	});

	mongoose.connection.on('error', err => {
		console.log(error(`Mongoose default connection has occured ${err} error`));
	});

	mongoose.connection.on('disconnected', () => {
		console.log(disconnected('Mongoose default connection is disconnected'));
	});
};

export default Connect;
