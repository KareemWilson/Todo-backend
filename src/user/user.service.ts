import { db } from "../utils/db.server";

type User = {
  id: number;
  name: string;
  email: string;
};

// List all users
export const listUsers = async (): Promise<User[]> => {
  return db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};

// Find single user (LOGIN)
export const login = async(user: Omit<User, "id">): Promise<User | null> => {
    const { name, email } = user
    return db.user.findFirst({
        where: {
            name,
            email
        }
    })
}

// Create new User (SIGNUP)

export const signup = async (user: Omit<User, "id">): Promise<User> => {
    const { name, email } = user
    return db.user.create({
        data: {
            name,
            email
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
}
