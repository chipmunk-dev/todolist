import express from 'express';
import * as todoController from '../controller/todo';
import { todoValidation, validationErrorCheck } from '../middleware/validation';

const route = express.Router();
const { checkContents, checkComplete } = todoValidation;

route.get('/', todoController.getList);
route.post('/', [checkContents, validationErrorCheck], todoController.create);
route.put('/:id', [checkContents, validationErrorCheck], todoController.update);
route.delete('/:id', todoController.remove);

export default route;
