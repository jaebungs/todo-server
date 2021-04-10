import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todo';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/update', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;