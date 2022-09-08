import Joi from 'joi';

const ticketTypeSchema = Joi.object({
	name: Joi.string().min(2).max(50).required(),
	price: Joi.number().required(),
	// event: Joi.string().required(),
});

export const validateticketTypeData = function (req, res, next) {
	let { error, value } = ticketTypeSchema.validate(req.body);
	if (error) {
		return res.status(400).json({
			message: error.details[0].message,
		});
	}
	req.body = value;
	next();
};
