# Todolist Restful API

## Main URL = *http://localhost:8000/api*


# Auth
--------

Functionality | HTTP request | Description
------------- | ------------- | -------------
[**Signup**](API.md#CreateUser) | **POST**: /users/signup | With this endpoint you can create new user, you can consume it for signup
[**Login**](API.md#CreateUser) | **POST**: /users/login | This endpoint to check whether the user already exist in database, or he should create new accout

--------------
# Todos

Functionality | HTTP request | Description
------------- | ------------- | -------------
[**Get Todos**](API.md#GetTodos) | **GET**: /todos/:userId | Get all todos for particular userId
[**Add new Todo**](API.md#AddTodo) | **POST**: /todos/ | User can add new task or todo item to his own list
[**Delete Todo**](API.md#DeleteTodo) | **Delete**: /todos/:todoId | User can delete particular todo or task from his own list
[**Update Task status**](API.md#updateTask) | **PATCH**: /todos/:{todoId} | User can update the task status whether it is done or not.

---------

## **Signup**
```
    http://localhost:8000/api/users/signup
```

### METHOD: 

`POST`

### Parameters
This endpoint does not need any parameter.

### Body

- name  =>  typeOf: String
- email => typeOf: String
- password  =>  typeOf: String

**Example**
```sh
{
  "name": "test user 2",
  "email": "test2@gmail.com",
  "password": "123456"
}
```


### Return type

JSON

```sh
{
  "id": "userId"
  "name": "User Name",
  "email": "User Email",
  "password": "User Password"
}
```
---------------------

## **Login**
```
    http://localhost:8000/api/users/login
```
### METHOD: 

`POST`

### Parameters
This endpoint does not need any parameter.

### Body

- name  =>  typeOf: String
- password  =>  typeOf: String

**Example**
```sh
{
  "name": "test user 2",
  "password": "123456"
}
```


### Return type

JSON

```sh
{
  "id": "userId"
  "name": "test user 2",
  "email": "User Email",
}
```
---------------------

## **Get Todos**
```
    http://localhost:8000/api/todos/:{userID}
```

### METHOD: 

`GET`

### Parameters

- userId

### Body

- This endpoint does not need Body.

**Example**
```sh
  http://localhost:8000/api/todos/6
```


### Return type

JSON 

```sh
[
  {
    "id": 7,
    "title": "test-task",
    "description": "this is a test-task",
    "isDone": false,
    "userId": 6
  },
  {
    "id": 8,
    "title": "test-task",
    "description": "this is a test-task",
    "isDone": false,
    "userId": 6
  },
]
```
---------------------

## **Add Todo**
```
    http://192.168.1.84:8000/api/todos
```

### METHOD: 

`POST`

### Parameters
This endpoint does not need any parameter.

### Body

- title  =>  typeOf: String
- description  =>  typeOf: String
- userId  =>  typeOf: number

**Example**
```sh
{
  "title": "test-task",
  "description": "this is a test-task",
  "userId": "6"
}
```

### Return type

JSON

```sh
{
  "id": 11,
  "title": "test-task",
  "description": "this is a test-task",
  "userId": 6,
  "isDone": false
}
```
---------------------

## **Delete todo**
```
    http://192.168.1.84:8000/api/todos/:{todoId}
```

### METHOD: 

`DELETE`

### Parameters

- todoId

### Body

- This endpoint does not need Body.


**Example**
```sh
  http://localhost:8000/api/todos/6
```

### Return type

String

```sh
"Task Deleted Successfully"
```
--------------------------

## **Update Task status**
```
    http://192.168.1.84:8000/api/todos/:{todoId}
```


### METHOD: 

`PARCH`

### Parameters

- todoId

### Body

- updatedStatus typeOf => true


**Example**
- URL:
```sh
  http://localhost:8000/api/todos/6
```

- Body:
```sh
  {
  "updatedStatus": true
  }
```

### Return type

String

```sh
"Task Updated Successfully"
```

----------------------------