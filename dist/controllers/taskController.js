"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const tasks = [];
let nextId = 1;
const createTask = (req, res) => {
    console.log(req.headers);
    const task = { id: nextId++, ...req.body };
    res.status(201).json(task);
};
exports.createTask = createTask;
const getTasks = (req, res) => {
    res.json(tasks);
};
exports.getTasks = getTasks;
const getTaskById = (req, res) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({ message: 'Task not found' });
    }
};
exports.getTaskById = getTaskById;
//# sourceMappingURL=taskController.js.map