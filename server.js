import express from 'express';
import { homeController } from './controllers/home.controller';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

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
import {
	createTicket,
	fetchSingleTicket,
	fetchTicket,
} from './controllers/ticket.controller';
import { validateTicketData } from './controllers/middleware/ticket.validator';
dotenv.config();

//multer init
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './tmp');
	},
	// filename: function (req, file, cb) {
	// 	cb(null, file.originalname + '-' + uuidv4());
	// },
});

const upload = multer({ storage: storage });

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

let port = 4001;

if (process.env.NODE_ENV !== 'development') {
	port = process.env.PORT;
}

server.get('/', homeController);

// Event Routes
server.get('/event', fetchEvent);
server.get('/event/:id', fetchSingleEvent);
server.post('/event', upload.single('image'), validateEventData, createEvent);
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

// Create Ticket
server.post('/ticket', validateTicketData, createTicket);
server.get('/ticket', fetchTicket);
server.get('/ticket/:id', fetchSingleTicket);

server.listen(port, () => {
	console.log('server started and running on port ' + port);
});
