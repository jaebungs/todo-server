// import "core-js/stable";
// import "regenerator-runtime";
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import todoRouter from './routes/todo';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// routing
app.use("/", todoRouter);

export default app;