import express from 'express';
import events from '../Controllers/event';

// auth middlewares for admin
import isAdminMiddleware from '../Middlewares/isManager';
// auth middleware for user
import isLoggedInUser from '../Middlewares/loggedIn';
// validations
import eventValidator from '../validations/event';

const eventRouter = express.Router();

eventRouter.post(
	'/add',
	isLoggedInUser.isLoggedIn,
	eventValidator.addEvent,
	events.addEvent,
);

eventRouter.get('/', isLoggedInUser.isLoggedIn, events.getEvents);

eventRouter.get('/:eid', isLoggedInUser.isLoggedIn, events.getSingleEvent);

// only admin can delete
eventRouter.delete(
	'/delete/:id',
	isAdminMiddleware.isManagerOwner,
	events.deleteEvent,
);

eventRouter.patch('/edit/:id', isLoggedInUser.isLoggedIn, events.editEvent);

export default eventRouter;
