import { Request, Response } from "express";
import { Todo } from "../types/todo"; // Import Todo interface or type

let todos: Todo[] = [
  { id: 1, title: "Do laundry", completed: false },
  { id: 2, title: "Buy groceries", completed: true },
];

// Health check
export const healthCheck = (req: Request, res: Response): void => {
  res.send("Server is running smoothly!");
};

// Get all todos
export const getAllTodos = (req: Request, res: Response): void => {
  res.json(todos);
};

// Get todo by id
export const getTodoById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    res.status(404).send("Todo not found");
    return;
  }
  res.json(todo);
};

// Create todo
export const createTodo = (req: Request, res: Response): void => {
  const { title, completed } = req.body;
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update todo
export const updateTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).send("Todo not found");
    return;
  }
  todos[todoIndex] = { ...todos[todoIndex], title, completed };
  res.json(todos[todoIndex]);
};

// Delete todo
export const deleteTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).send("Todo not found");
    return;
  }
  const deletedTodo = todos.splice(todoIndex, 1);
  res.json(deletedTodo[0]);
};
