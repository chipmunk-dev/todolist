// global
import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
// local
import './lib/db';
import { config } from '../config';

const app = express();
const port = config.port;
const corsOptions: cors.CorsOptions = {
	origin: config.cors.origin,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	optionsSuccessStatus: 200,
	credentials: true,
};

app.use(json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan(config.morgan));
app.use(helmet());

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
