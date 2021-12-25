import mongoose from "mongoose";
import taskModel from "../models/tasks.js"

export const getTask = (req, res, next) => {
    taskModel.find()
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json({ result })})
        .catch(error => {
                    console.log(error)
                    res.status(500).json({ Error: error })
                })
        }

export const createTask =  (req, res, next) => {

    const task = new taskModel({
        _id: new mongoose.Types.ObjectId(),
        task: req.body.task,
        taskDay: req.body.taskDay,
        taskReminder: req.body.taskReminder,
        createdBy: req.body.createdBy
    })

    task
        .save()
        .then(result => {
            console.log(result)
            res.status(200).json({
                mes: "post",
                task: result
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({Error:error})
        });

   
}

export const getSingleTask =  (req, res, next) => {
    const id = req.params.taskId
    taskModel.findById(id)
    .exec()
    .then(doc => {
        console.log(doc)
        if (doc)
            res.status(200).json(doc)
        else    
            res.status(404).json({sdfdf:"not found"})
    }
        )
    .catch(error => {
        console.log(error)
        res.status(500).json({Error:error})
    })

}

export const updateTask  = (req, res, next) => {
    const id = req.params.taskId
    // const update = {}
    
    // for (const ops of req.body) {
    //     update[ops.propName] = ops.value
    // }

    taskModel.updateOne({_id:id},{$set:req.body})
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({Error:error})
    })
}

export const deleteTask =  (req, res, next) => {
    const id = req.params.taskId
    taskModel.deleteOne({_id:id})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(error => {
        console.log(error)
        res.status(500).json({Error:error})
    })
}