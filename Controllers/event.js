import status from 'http-status';
import EventSchema from '../Models/eventSchema';

const getEvents = (req, res) => {
	EventSchema.find()
		.then(events => {
			res.status(status.OK).send(events);
		})
		.catch(err => {
			res.status(status.INTERNAL_SERVER_ERROR).send({
				Message: 'No Events!',
				err,
			});
		});
};

const addEvent = (req, res) => {
	const { name, date, description } = req.body;

	const event = new EventSchema({
		name,
		date,
		description,
	});
	event
		.save()
		.then(savedEvent => {
			res.status(status.OK).send({
				savedEvent,
				Message: 'Event Created Successfully',
				type: status.Ok,
			});
		})
		.catch(err => {
			res.status(status.INTERNAL_SERVER_ERROR).send({
				Message: status.INTERNAL_SERVER_ERROR,
				err,
			});
		});
};

const deleteEvent = (req, res) => {
	const { id } = req.params;
	EventSchema.findByIdAndRemove(id, (err, result) => {
		if (result) {
			res.status(status.OK).send({
				Message: 'Event Deleted Successfully.',
			});
		} else {
			res.status(status.INTERNAL_SERVER_ERROR).send({
				Message: 'Unable to Delete.',
				err,
			});
		}
	});
};

const editEvent = (req, res) => {
	const { id } = req.params;
	const query = { $set: req.body };
	EventSchema.findByIdAndUpdate(id, query, { new: true }, (err, result) => {
		if (err) {
			res.status(status.INTERNAL_SERVER_ERROR).send({
				Message: 'Unable to Update.',
			});
		} else {
			res.status(status.OK).send({
				Message: 'Successfully Updated.',
				result,
			});
		}
	});
};

const getSingleEvent = (req, res) => {
	const { eid } = req.params;

	EventSchema.findOne({ _id: eid })
		.then(event => {
			if (!event) {
				return res.status(status.NOT_FOUND).send({
					Message: 'Boat not found',
				});
			}
			return res.status(status.OK).send(event);
		})
		.catch(err => {
			return res.status(status.INTERNAL_SERVER_ERROR).send({
				Message: 'Internal Server Error',
				err,
			});
		});
};

export default { getEvents, addEvent, deleteEvent, editEvent, getSingleEvent };
