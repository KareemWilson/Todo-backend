import { db } from "../src/utils/db.server";

type User = {
  name: string;
  email: string;
};

type Todo = {
  title: string;
  description: string;
};

function getUsers(): Array<User> {
  return [
    {
      name: "Kareem Wilson",
      email: "kareem@gmail.com",
    },
    {
      name: "Pierre Safwat",
      email: "pierre@gmail.com",
    },
    {
      name: "Steven Effat",
      email: "steven@gmail.com",
    },
  ];
}

function getToDos(): Array<Todo> {
  return [
    {
      title: "Task number one - test",
      description: "This task should be finished in 5 days from now",
    },
    {
      title: "Task number two - test",
      description: "This task should be finished in 1 day from now",
    },
    {
      title: "Task number three - test",
      description: "This task should be finished in 3 days from now",
    },
  ];
}

const seed = async () => {
  await Promise.all(
    getUsers().map((user) => {        
      return db.user.create({
        data: user,
      });
    })
  );
  const user = await db.user.findFirst({
    where: {
      name: "Kareem Wilson",
    },
  });
  
  await Promise.all(
    getToDos().map((todo) => {
      const { title, description } = todo;
      return db.todo.create({
        data: {
          title,
          description,
          userId: user?.id,
        },
      });
    })
  );
  console.log('The seed was successfully completed');
  
};

seed().catch((e) => console.error(e));
