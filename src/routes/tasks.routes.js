import { Router } from "express";
//import { authRequired } from "../middlewares/validateToken.js";
import { getTasks,getTask,createTask,updateTask,deleteTask } from "../controllers/tasks.controller.js";

const router = Router ()

router.get ('/tasks',  getTasks)

router.get ('/tasks/:id',  getTask )

router.post ('/tasks',  createTask)

router.delete ('/tasks/:id',  deleteTask)

router.put ('/tasks/:id',  updateTask)


export default router;

