import express from 'express';
import type { Request, Response } from 'express';

import * as TodoService from './todo.service';

export const todoRouter = express.Router();


// GET: TODOS FOR PARTICULAR USER 

todoRouter.get('/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const todos = await TodoService.getTodos(parseInt(userId))
        return res.status(200).json(todos)
    } catch (error: any) {
        return res.status(400).json(error.message)
    }
})


// POST: Add new todo task

todoRouter.post('/', async (req: Request, res: Response) => {
    try{
        const todo = req.body        
        const newTodo = await TodoService.addTodo(todo)
        return res.status(200).json(newTodo)
    } catch(error: any) {
        return res.status(400).json(error.message)
    }
})


// DELETE: dELETE todo

todoRouter.delete('/:todoId', async (req: Request, res: Response) => {
    try {
        const todoId = req.params.todoId
        await TodoService.deleteTodo(parseInt(todoId))
        return res.status(200).json('Task Deleted Successfully')
    } catch (error: any) {
        return res.status(400).json('An Error accurred while deleting the task')
    }
} )