import express from 'express';
import * as todoController from '../controller/todo';
import { createValidation, updateValidation } from '../middleware/validation';

const route = express.Router();

route.get('/', todoController.getList);
route.post('/', createValidation, todoController.create);
route.put('/:id', updateValidation, todoController.update);
route.delete('/:id', todoController.remove);

export default route;
