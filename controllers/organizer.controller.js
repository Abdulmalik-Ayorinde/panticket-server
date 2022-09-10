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
export async function deleteOrganizer(req, res) {
	try {
		const deleteOrganizer = await Organizer.findByIdAndDelete(req.params.id);
		return res.status(201).json({
			message: 'Organizer deleted successfully',
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function updateOrganizer(req, res) {
	try {
		const updateOrganizer = await Organizer.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		return res.status(201).json({
			message: 'Organizer created successfully',
			organizer: updateOrganizer,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function fetchOrganizer(req, res) {
	try {
		const getOrganizer = await Organizer.find();
		return res.status(200).json({
			message: 'Organizer created successfully',
			organizer: getOrganizer,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchSingleOrganizer(req, res) {
	try {
		const getsingleOrganizer = await Organizer.findById(req.params.id);
		return res.status(200).json({
			message: 'Organizer created successfully',
			organizer: getsingleOrganizer,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
