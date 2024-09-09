import express, { Request, Response } from 'express';

import { Task } from '../models/taskModel';

const tasks: Task[] = [];
let nextId = 1;

export const createTask = (req: Request, res: Response) => {
  const task: Task = { id: nextId++, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
};

export const getTasks = (req: Request, res: Response) => {
  console.log(tasks);
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};
export const deleteTaskById = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    res.status(201).json({ message: `id:${task.id} has been deleted` });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const TaskRouter = express.Router();
