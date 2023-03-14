import mongoose from 'mongoose';
import { config } from '../../config';

if (!config.db.host) {
	throw new Error('Please add the MONGO_URL environment variable');
}

mongoose.connect(config.db.host, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, '❌ mongodb connection error'));
database.once('open', () => console.log('✅ mongodb connected successfully'));

mongoose.Promise = Promise;
