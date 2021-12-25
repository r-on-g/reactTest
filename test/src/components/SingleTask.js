import React from 'react'
import Task from "./Task"
import { useSelector } from 'react-redux';

const SingleTask = ({id}) => {

    var tasks = useSelector(state => state.tasks)
    console.log(id)
    console.log(tasks)
    return (
        <div>
           <Task task = {tasks[id-1]}/>
        </div>
    )
}

export default SingleTask
// <Task task = {tasks[id-1]}/>