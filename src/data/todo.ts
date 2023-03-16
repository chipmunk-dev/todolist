import mongoose from 'mongoose';
import { mapVirtualId } from '../../mapped/db';
import { TodoInput } from '../interface/todo.inteface';

const { Schema, model } = mongoose;

const todoSchema = new Schema(
	{
		contents: String,
		complete: Boolean,
	},
	{ timestamps: true }
);
mapVirtualId(todoSchema);

const Todo = model('todo', todoSchema);

export const findAll = async () => {
	return Todo.find();
};

export const findById = async (id: string) => {
	return Todo.findById(id);
};

export const create = async (todo: TodoInput) => {
	return new Todo(todo).save();
};

export const update = async ({ id, contents, complete }: { id: string; contents?: string; complete?: boolean }) => {
	const updateQuery: { contents?: string; complete?: boolean } = {};
	contents && (updateQuery.contents = contents);
	complete && (updateQuery.complete = complete);
	return Todo.findOneAndUpdate({ _id: id }, { ...updateQuery });
};

export const deleteById = async (id: string) => {
	return Todo.remove({ _id: id });
};
