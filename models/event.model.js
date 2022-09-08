import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const eventSchema = new Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
	},
	price: {
		type: Number,
		default: 0,
	},
	date: {
		type: Date,
	},
	time: {
		type: String,
	},
	isFeatured: {
		type: Boolean,
		default: false,
	},
	description: {
		type: String,
	},
	tickets: [
		{
			type: String,
			ref: 'Ticket',
		},
	],
	ticketTypes: [
		{
			type: String,
			ref: 'TicketType',
		},
	],
	organizer: {
		type: String,
		ref: 'Organizer',
	},
	category: {
		type: String,
		ref: 'Category',
	},
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
