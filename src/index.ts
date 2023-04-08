import * as dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
import { userRouter } from './user/user.router';
import { todoRouter } from './todo/todo.router';

let morgan = require('morgan')


dotenv.config()
const PORT: number = parseInt(process.env.PORT as string);

const app = express()

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/users', userRouter)
app.use('/api/todos', todoRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
})

