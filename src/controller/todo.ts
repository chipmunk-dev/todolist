import { Request, Response } from 'express';

import * as todoRepository from '../data/todo';
import { TodoInput, TodoOutput } from '../interface/todo.inteface';

export const getList = async (req: Request, res: Response) => {
	const data = await todoRepository.findAll();
	return res.status(200).json({ data });
};
export const create = async (req: Request, res: Response) => {
	const { contents } = req.body;
	const todo: TodoInput = { contents, complete: false };
	const createTodo = await todoRepository.create(todo);
	return res.status(201).json({ todoId: createTodo.id });
};
export const update = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { contents, complete } = req.body;
	const updateTodo = await todoRepository.update({ id, contents, complete });
	return res.status(200).json({ todoId: updateTodo.id });
};
export const remove = async (req: Request, res: Response) => {
	const { id } = req.params;
	await todoRepository.deleteById(id);
	return res.sendStatus(204);
};
