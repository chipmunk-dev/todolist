import { ObjectId } from 'mongoose';

export interface TodoInput {
	contents: string;
	complete: boolean;
}

export interface TodoOutput {
	id: string;
	contents: string;
	complete: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface Todo {
	_id: ObjectId;
	contents: string;
	complete: boolean;
	createdAt: Date;
	updatedAt: Date;
}
