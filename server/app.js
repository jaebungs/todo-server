import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { getTodo, createTodo } from './routes/todo.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

dotenv.config();

// routing
app.get('/', getTodo)
app.post('/', createTodo)

app.listen(PORT, () => {
  console.log("server started");
});