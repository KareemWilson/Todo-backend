import { db } from "../utils/db.server";
import type { User } from "../user/user.service";
import { json } from "stream/consumers";

type Todo = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  userId: number;
};

// List todos for particular user by id
export const getTodos = async (userId: number): Promise<Todo[]> => {
  return db.todo.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      isDone: true,
      userId: true,
    },
  });
};

// Add new todo item
export const addTodo = async (
  todo: Omit<Todo, "id" | "isDone">
): Promise<Todo> => {
  const { title, description, userId } = todo;
  return db.todo.create({
    data: {
      title,
      description,
      user: {
        connect: { id: Number(userId) },
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      userId: true,
      isDone: true,
    },
  });
};

// Delete todo Task
export const deleteTodo = async (todoId: number): Promise<Todo> => {
  return db.todo.delete({
    where: {
      id: todoId,
    },
  });
};
