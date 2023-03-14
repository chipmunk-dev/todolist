import * as dotenv from 'dotenv';

dotenv.config();

const required = (key: string, defaultValue?: string) => {
	const value = process.env[key] || defaultValue;

	if (value == null) throw new Error(`Key ${key} is undefined`);

	return value;
};

export const config = {
	port: parseInt(required('PORT', '3333')),
	db: {
		host: required('MONGO_URL'),
	},
};
