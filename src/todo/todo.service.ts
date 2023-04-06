import { db } from "../utils/db.server";
import type { User } from "../user/user.service";

type Todo = {
    id: number,
    title: string,
    description: string,
    userId: number
}

// List todos for particular user by id
export const getTodos = async(userId: number): Promise<Todo[]> => {
    return db.todo.findMany({
        where: {
            userId,
        }
    })
}