import express from "express";
import todoRoutes from "./routes/todoRoutes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(todoRoutes);

export default app;
