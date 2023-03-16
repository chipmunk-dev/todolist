import { NextFunction, Request, Response } from 'express';
import { body, check, validationResult } from 'express-validator';

export const todoValidation = {
	checkContents: body('contents').trim().notEmpty().withMessage('contents is empty.'),
	checkComplete: body('complete').isBoolean().withMessage('invalid "complete" value'),
};

export const validationErrorCheck = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const messages = errors.array().map((error) => error.msg);
		return res.status(400).json({ errors: messages });
	}

	next();
};
