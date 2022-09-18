import Joi from 'joi';

const ticketSchema = Joi.object({
	issuer: Joi.string().min(2).max(50).required(),
	vendor: Joi.string().required(),
	email: Joi.string().required(),
	price: Joi.number().required(),
	status: Joi.string().required(),
	event: Joi.string().required(),
	user: Joi.object().required(),
});

export const validateTicketData = function (req, res, next) {
	let { error, value } = ticketSchema.validate(req.body);
	if (error) {
		return res.status(400).json({
			message: error.details[0].message,
		});
	}
	req.body = value;
	next();
};
