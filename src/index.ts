import express from 'express';

import { config } from '../config';
import './lib/db';

const app = express();
const port = config.port;

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

app.get('/', async (req, res) => {
	res.json({ message: 'Please visit /countries to view all the countries' });
});

app.use('/countries', countryRoutes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
