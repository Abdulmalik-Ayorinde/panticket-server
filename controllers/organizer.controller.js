import Organizer from './../models/organizer.model';

export async function createOrganizer(req, res) {
	try {
		const newOrganizer = await Organizer.create(req.body);
		return res.status(201).json({
			message: 'Organizer created successfully',
			organizer: newOrganizer,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export function deleteOrganizer() {}
export function updateOrganizer() {}
export function fetchOrganizer() {}
