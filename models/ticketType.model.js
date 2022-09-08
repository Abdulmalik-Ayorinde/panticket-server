import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ticketTypeSchema = new Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	price: {
		type: Number,
		default: 0,
	},
	name: {
		type: String,
		required: true,
	},
	event: {
		type: String,
		ref: 'Event',
	},
});

const TicketType = mongoose.model('TicketType', ticketTypeSchema);

export default TicketType;
