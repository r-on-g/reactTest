import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, ontoggle }) => {
    return (
        <div className={`task ${task.taskReminder ? 'reminder': ''}` }
        onDoubleClick={() => ontoggle(task._id)} >

            <h3>{task.task} <FaTimes onClick={() => onDelete(task._id)}
                style={{ color: "purple", cursor: 'pointer' }} />
            </h3>
            <p>{task.taskDay}</p>
        </div>
    )
}

export default Task