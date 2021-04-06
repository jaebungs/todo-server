import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { getTodo, createTodo, deleteTodo } from './routes/todo.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// routing

app.get('/', getTodo);
app.post('/', createTodo);
app.delete('/delete', deleteTodo);

app.post('/test', (req, res) => {
  console.log(req.body)
  res.status(200).send({data: req.body})
})

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});