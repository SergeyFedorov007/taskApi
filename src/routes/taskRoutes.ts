import { Router } from 'express';

import { createTask, deleteTaskById, getTaskById, getTasks } from '../controllers/taskController';

const router = Router();

router.post('/task', createTask);
router.get('/task', getTasks);
router.get('/task/:id', getTaskById);
router.get('/task/my/authored', getTaskById);
router.get('/task/my/assigned', getTaskById);
router.put('/task/:id', getTaskById);
router.delete('/task/:id', deleteTaskById);

export default router;
