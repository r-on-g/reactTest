import express from "express";
import {getTask,getSingleTask,createTask,updateTask,deleteTask} from "../controller/tasks.js"

const router = express.Router()

router.get("/", getTask)

router.post("/",createTask)


router.get("/:taskId",getSingleTask)

router.patch("/:taskId",updateTask)

router.delete("/:taskId",deleteTask)

export default router