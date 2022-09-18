import Event from '../models/event.model';
import path from 'path';

import cloudinary from 'cloudinary';

cloudinary.config({
	cloud_name: 'malikapp',
	api_key: '812716855869757',
	api_secret: 'MNxGI6B_EpAxITCvfagmyLaKEgM',
});

export async function createEvent(req, res) {
	try {
		const normalizedPath = path.normalize(req.file.path);

		const uploadImage = await cloudinary.v2.uploader.upload(normalizedPath);
		req.body.image = uploadImage.secure_url;

		const newEvent = await Event.create(req.body);
		return res.status(201).json({
			message: 'event created successfully',
			event: newEvent,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function deleteEvent(req, res) {
	try {
		const deleteEvent = await Event.findByIdAndDelete(req.params.id);
		return res.status(201).json({
			message: 'event deleted successfully',
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export const updateEvent = async (req, res) => {
	try {
		const UpdateEvent = await Event.findByIdAndUpdate(
			req.params.id,
			req.body
		).populate('ticketTypes');
		return res.status(201).json({
			message: 'event Updated successfully',
			event: UpdateEvent,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
};
export async function fetchEvent(req, res) {
	try {
		const GetEvent = await Event.find();
		return res.status(201).json({
			message: 'event Get successfully',
			event: GetEvent,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchSingleEvent(req, res) {
	try {
		const GetSingleEvent = await Event.findById(req.params.id)
			.populate('ticketTypes')
			.populate('organizer')
			.populate('category');
		return res.status(201).json({
			message: 'event Get successfully',
			event: GetSingleEvent,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
