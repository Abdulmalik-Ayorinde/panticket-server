import TicketType from './../models/ticketType.model';

export async function createTicketType(req, res) {
	try {
		const newTicketType = await TicketType.create(req.body);
		return res.status(201).json({
			message: 'TicketType created successfully',
			TicketType: newTicketType,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function deleteTicketType(req, res) {
	try {
		const deleteTicketType = await TicketType.findByIdAndDelete(req.params.id);
		return res.status(201).json({
			message: 'TicketType deleted successfully',
			TicketType: deleteTicketType,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function updateTicketType(req, res) {
	try {
		const UpdateTicketType = await TicketType.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		return res.status(201).json({
			message: 'TicketType Updated successfully',
			ticketType: UpdateTicketType,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function fetchTicketType(req, res) {
	try {
		const getTicketType = await TicketType.find();
		return res.status(201).json({
			message: 'Got all Ticket Type successfully',
			ticketType: getTicketType,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchSingleTicketType(req, res) {
	try {
		const getSingleTicketType = await TicketType.findById(req.params.id);
		return res.status(201).json({
			message: 'Ticket Type successfully',
			ticketType: getSingleTicketType,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
