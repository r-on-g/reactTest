import mongoose from "mongoose";

const taskSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    task: String, 
    taskDay: String,
    createdBy: String,
    taskReminder: Boolean

});

export default mongoose.model("Task", taskSchema);
