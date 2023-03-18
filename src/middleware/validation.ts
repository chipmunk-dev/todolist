import { NextFunction, Request, Response } from 'express';
import Ajv, { JTDSchemaType } from 'ajv/dist/jtd';

interface CreateTodo {
	contents: string;
}
interface UpdateTodo {
	id: string;
	contents?: string;
	complete?: boolean;
}

const ajv = new Ajv();

const createSchema: JTDSchemaType<CreateTodo> = {
	properties: {
		contents: { type: 'string' },
	},
};
const updateSchema: JTDSchemaType<UpdateTodo> = {
	properties: {
		id: { type: 'string' },
	},
	optionalProperties: {
		contents: { type: 'string' },
		complete: { type: 'boolean' },
	},
};

const createValidate = ajv.compile(createSchema);
const updateValidate = ajv.compile(updateSchema);

export const createValidation = (req: Request, res: Response, next: NextFunction) => {
	const { contents } = req.body;
	const valid = createValidate({ contents });

	if (!valid) {
		return res.status(400).json({ message: createValidate.errors });
	}

	next();
};
export const updateValidation = (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	const { contents, complete } = req.body;
	const valid = updateValidate({ id, contents, complete });

	if (!valid) {
		return res.status(400).json({ message: updateValidate.errors });
	}

	next();
};
