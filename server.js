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
import { validateEventData } from './controllers/middleware/event.validator';
import { validateOrganizerData } from './controllers/middleware/organizer.validator';
import { createOrganizer } from './controllers/organizer.controller';
import { validateCategoryData } from './controllers/middleware/category.validator';
import { createCategory } from './controllers/category.controller';
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
server.put('/event/:id', validateEventData, updateEvent);

// Organizer Routes
server.post('/organizer', validateOrganizerData, createOrganizer);

// Category Routes
server.post('/category', validateCategoryData, createCategory);

// Ticket-Type Routes
server.get('/tickettype', fetchTicketType);
server.get('/tickettype/:id', fetchSingleTicketType);
server.post('/tickettype', validateticketTypeData, createTicketType);
server.put('/tickettype/:id', updateTicketType);
server.delete('/tickettype/:id', deleteTicketType);

server.listen(port, () => {
	console.log('server started and running on port ' + port);
});
