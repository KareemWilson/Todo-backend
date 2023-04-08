import { db } from "../utils/db.server";

export type User = {
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
export const login = async(user: Omit<User, "id"> & { password: string; }): Promise<User | null> => {
    const { name, password } = user
    return db.user.findFirst({
        where: {
            name,
            password
        },
        select: {
          id: true,
          name: true,
          email: true,
        }
    })
}

// Create new User (SIGNUP)

export const signup = async (user: Omit<User, "id"> & { password: string }): Promise<User> => {
    const { name, email, password } = user
    return db.user.create({
        data: {
            name,
            email,
            password
        },
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
}
