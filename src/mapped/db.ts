import mongoose from 'mongoose';

export const mapVirtualId = (schema: mongoose.Schema) => {
	schema.virtual('id').get(function (this: any) {
		return this._id.toString();
	});
	schema.set('toJSON', { virtuals: true });
	schema.set('toObject', { virtuals: true });
};
