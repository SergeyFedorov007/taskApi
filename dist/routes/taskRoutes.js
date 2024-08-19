"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.post('/task', taskController_1.createTask);
router.get('/task', taskController_1.getTasks);
router.get('/task/:id', taskController_1.getTaskById);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map