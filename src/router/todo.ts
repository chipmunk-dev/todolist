import express from 'express';
import * as todoController from '../controller/todo';

const route = express.Router();

route.get('/', todoController.getList);
route.post('/', todoController.create);
route.put('/:id', todoController.update);
route.delete('/:id', todoController.remove);

export default route;
