import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState('')
    const [taskDay, setTaskday] = useState('')
    const [taskReminder, setTaskreminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!task) {
            alert('add task')
            return
        }
        const createdBy = localStorage.getItem("id")
        onAdd({ task, taskDay, taskReminder,createdBy })

        setTask('')
        setTaskday('')
        setTaskreminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add' value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='text' placeholder='add day' value={taskDay} onChange={(e) => setTaskday(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>set reminder</label>
                <input type='checkbox' checked={taskReminder} value={taskReminder} onChange={(e) => setTaskreminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='save' className='btn btn-block' />
        </form>
    )
}

export default AddTask
