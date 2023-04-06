import express from 'express';
import type { Request, Response } from 'express';

import * as TodoService from './todo.service';

export const todoRouter = express.Router();


// GET: TODOS FOR PARTICULAR USER 

todoRouter.get('/', async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId
        const todos = await TodoService.getTodos(userId)
        return res.status(200).json(todos)
    } catch (error: any) {
        return res.status(400).json(error.message)
    }
})