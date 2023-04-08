import express from 'express';
import type { Request, Response } from 'express';

import * as UserService from './user.service';

export const userRouter = express.Router();

// GET: List all users 

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const users = await UserService.listUsers()
        return res.status(200).json(users)
    } catch (error: any) {
        return res.status(400).json(error.message)
    }
})


// GET: single user (LOGIN)

userRouter.post('/login', async(req: Request, res: Response) => {
    try {
        const user = req.body
        const existedUser = await UserService.login(user)
        if(existedUser){
            res.status(200).json(existedUser)
        } else {
            res.status(403).json({message: 'Invalid Name or Password'})
        }
    } catch (error: any) {
        return res.status(400).json(error.message)
    }
})


// POST: Create new user (SIGNUP)
userRouter.post('/signup', async (req: Request, res: Response) => {
    try {
        const user = req.body
        const newUser = await UserService.signup(user)
        return res.status(200).json({...newUser, message: 'Signup Successfully'})
    } catch (error: any) {
        return res.status(400).json(error.message)
    }
})