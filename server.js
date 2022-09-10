import express from 'express';
import { homeController } from './controllers/home.controller';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
	createEvent,
	fetchEvent,
	deleteEvent,
	updateEvent,
	fetchSingleEvent,
} from './controllers/event.controller';
import {
	updateValidateEventData,
	validateEventData,
} from './controllers/middleware/event.validator';
import { validateOrganizerData } from './controllers/middleware/organizer.validator';
import {
	createOrganizer,
	deleteOrganizer,
	fetchOrganizer,
	fetchSingleOrganizer,
	updateOrganizer,
} from './controllers/organizer.controller';
import { validateCategoryData } from './controllers/middleware/category.validator';
import {
	createCategory,
	deleteCategory,
	fetchCategory,
	fetchSingleCategory,
	updateCategory,
} from './controllers/category.controller';
import { validateticketTypeData } from './controllers/middleware/tickettype.validator';
import {
	createTicketType,
	deleteTicketType,
	fetchSingleTicketType,
	fetchTicketType,
	updateTicketType,
} from './controllers/tickettype.controller';
dotenv.config();

// Event
const connectToDB = () => mongoose.connect(process.env.DEV_DB);

connectToDB()
	.then(() => console.log('connected to DB'))
	.catch((err) => console.log(err.message));

const server = express();
//Add code to make our server be able to read json form and url encoded form
server.use(express.json());
server.use(
	express.urlencoded({
		extended: true,
	})
);

const port = 4001;

server.get('/', homeController);

// Event Routes
server.get('/event', fetchEvent);
server.get('/event/:id', fetchSingleEvent);
server.post('/event', validateEventData, createEvent);
server.delete('/event/:id', deleteEvent);
server.put('/event/:id', updateValidateEventData, updateEvent);

// Organizer Routes
server.get('/organizer', fetchOrganizer);
server.post('/organizer', validateOrganizerData, createOrganizer);
server.get('/organizer/:id', fetchSingleOrganizer);
server.put('/organizer/:id', updateOrganizer);
server.delete('/organizer/:id', deleteOrganizer);

// Category Routes
server.get('/category', fetchCategory);
server.post('/category', validateCategoryData, createCategory);
server.get('/category/:id', fetchSingleCategory);
server.put('/category/:id', updateCategory);
server.delete('/category/:id', deleteCategory);

// Ticket-Type Routes
server.get('/tickettype', fetchTicketType);
server.get('/tickettype/:id', fetchSingleTicketType);
server.post('/tickettype', validateticketTypeData, createTicketType);
server.put('/tickettype/:id', updateTicketType);
server.delete('/tickettype/:id', deleteTicketType);

server.listen(port, () => {
	console.log('server started and running on port ' + port);
});
