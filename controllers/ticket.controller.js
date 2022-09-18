import Ticket from '../models/ticket.model';
import User from './../models/user.model';

export async function createTicket(req, res) {
	try {
		const user = await User.create(req.body.user);
		req.body.user = user;
		const newTicket = await Ticket.create(req.body);
		return res.status(201).json({
			message: 'ticket created successfully',
			newTicket: newTicket,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchTicket(req, res) {
	try {
		const GetTicket = await Ticket.find();
		return res.status(201).json({
			message: 'Got Ticket successfully',
			ticket: GetTicket,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchSingleTicket(req, res) {
	try {
		const GetSingleTicket = await Ticket.findById(req.params.id)
			.populate('user')
			.populate('event');
		return res.status(201).json({
			message: 'Got Ticket successfully',
			ticket: GetSingleTicket,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
