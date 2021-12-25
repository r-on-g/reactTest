import Task from "./Task"
import { useSelector } from 'react-redux';

const Tasks = ({onDelete, ontoggle}) => {
    
    var tasks = useSelector(state => state.tasks)

    return (
        <>
            {
                tasks.map((task,index) =>
                (<Task key = {index} 
                task = {task} onDelete = {onDelete} ontoggle = {ontoggle} />))
            }
        </>
    )
}

export default Tasks
