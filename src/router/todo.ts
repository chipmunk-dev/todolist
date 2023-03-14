import express from 'express';

const route = express.Router();

route.get('/');
route.post('/');
route.put('/:id');
route.delete('/:id');

export default route;
