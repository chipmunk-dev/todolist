import { Request, Response } from 'express';
import { CallbackError } from 'mongoose';

import * as todoRepository from '../data/todo';
import { TodoInput } from '../interface/todo.inteface';

const mongooseErrorTypeGuard = (error: any): error is CallbackError => {
	return 'reason' in error;
};

// Get List
export const getList = async (req: Request, res: Response) => {
	const data = await todoRepository.findAll();
	return res.status(200).json({ data });
};

// Create
export const create = async (req: Request, res: Response) => {
	const { contents } = req.body;
	const todo: TodoInput = { contents, complete: false };
	const createTodo = await todoRepository.create(todo);
	return res.status(201).json({ todoId: createTodo.id });
};

// Update contents
export const update = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { contents } = req.body;

	try {
		const updateTodo = await todoRepository.update({ id, contents });
		return res.status(200).json({ todoId: updateTodo.id });
	} catch (error) {
		if (mongooseErrorTypeGuard(error)) {
			return res.status(400).json({ error: error?.message });
		}
		return res.status(500).json({ error: 'There was a problem with the server. Please try again later.' });
	}
};

// Delete
export const remove = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await todoRepository.deleteById(id);
		return res.sendStatus(204);
	} catch (error) {
		if (mongooseErrorTypeGuard(error)) {
			return res.status(400).json({ error: error?.message });
		}
		return res.status(500).json({ error: 'There was a problem with the server. Please try again later.' });
	}
};
