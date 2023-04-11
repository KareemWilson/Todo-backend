# Todo-backend

## Important Links and Info

- [API Documentation](./API.md)
- [FrontEnd Repository](https://github.com/KareemWilson/Todo-mobile)
- [ERD for DataBase](./ERD.png)


<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 TodoList <a name="about-project"></a>

**TodoList** Mobile application made with React Native and Node.js is an application that allows users to create, manage, and track their daily tasks. The app allows users to add tasks. The user interface is simple and intuitive, making it easy for users to navigate and use. The app is built on top of a Node.js backend, which stores the tasks by dealing with PostgreSQL and Prisma.js

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://expo.dev/">Expo</a></li>
    <li><a href="https://reactjs.org/">React</a></li>
    <li><a href="https://reactnative.dev/">React Native</a></li>
    <li><a href="https://redux.js.org/">Redux</a></li>
  </ul>
</details>

<details>
<summary>Backend</summary>
  <ul>
    <li><a href="https://nodejs.org/en">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.Js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://www.prisma.io/">Prisma.js (As Database ORM)</a></li>
  </ul>
</details>


<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Node js --version *16.20.0*
- Npm packages 

### Setup

- **Clone this repository to your desired folder:**

```sh
  cd my-folder
  git clone git@github.com:KareemWilson/Todo-backend.git
```

### Install

- **Install this project with:**

```sh
  cd Todo-backend
  npm install
```
**NOTE:** *'Make sure that you are using node *16.20.0*'*

- Add `.env` file

This file used by prisma only, But I didn't push it into version control for security best practises ( We specify in it the `DATABASE_URL` environment variable, and `PORT`)

**So,**
*First:* Create `.env` file

*Second:* Initialize DATABASE_URL environment variable

```sh
  DATABASE_URL="postgresql://<Database_username>:<Database_password>@localhost:5432/mydb?schema=public"
```

*Finally:* Initialize PORT environment variable, set it to 8000

```sh
  PORT = 8000
```

- **Migrate database:** 

```sh
  npx prisma migrate dev
```

*This Command will migrate db and seed it*

### Usage

- **To run the project, execute the following command:**

```sh
  npm run dev
```

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Kareem Wilson**

- GitHub: [Kareem Wilson](https://github.com/KareemWilson)
- LinkedIn: [Kareem Wilson](https://linkedin.com/in/kareem-wilson)


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.
