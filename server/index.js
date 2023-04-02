import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from './routes/users.js'
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const PORT = 8000;
const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log("connected to database"));

app.use('/users', userRouter);
app.use(notFound)
app.use(errorHandler)
app.listen(PORT, () => console.log('Server is listening on Port ' + PORT));

