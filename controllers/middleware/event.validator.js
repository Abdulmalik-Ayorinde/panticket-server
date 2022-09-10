import Joi from 'joi';

const eventSchema = Joi.object({
	name: Joi.string().min(2).max(50).required(),
	location: Joi.string().min(2).max(50).required(),
	price: Joi.number().required(),
	date: Joi.string().required(),
	time: Joi.string().required(),
	isFeatured: Joi.boolean(),
	description: Joi.string().required(),
	ticketTypes: Joi.string().required(),
	organizer: Joi.string().required(),
	category: Joi.string().required(),
});

export const validateEventData = function (req, res, next) {
	let { error, value } = eventSchema.validate(req.body);
	if (error) {
		return res.status(400).json({
			message: error.details[0].message,
		});
	}
	req.body = value;
	next();
};

const updateEventSchema = Joi.object({
	name: Joi.string().min(2).max(50),
	location: Joi.string().min(2).max(50),
	price: Joi.number(),
	date: Joi.string(),
	time: Joi.string(),
	isFeatured: Joi.boolean(),
	description: Joi.string(),
	ticketTypes: Joi.string(),
	organizer: Joi.string(),
	category: Joi.string(),
});

export const updateValidateEventData = function (req, res, next) {
	let { error, value } = updateEventSchema.validate(req.body);
	if (error) {
		return res.status(400).json({
			message: error.details[0].message,
		});
	}
	req.body = value;
	next();
};
