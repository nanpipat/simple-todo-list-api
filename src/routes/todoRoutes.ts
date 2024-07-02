import express from "express";
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  healthCheck,
} from "../controllers/todoController";

const router = express.Router();

// Health check
router.get("/health", healthCheck);

// GET all todos
router.get("/api/todos", getAllTodos);

// GET todo by ID
router.get("/api/todos/:id", getTodoById);

// POST create a new todo
router.post("/api/todos", createTodo);

// PUT update todo by ID
router.put("/api/todos/:id", updateTodo);

// DELETE todo by ID
router.delete("/api/todos/:id", deleteTodo);

export default router;
