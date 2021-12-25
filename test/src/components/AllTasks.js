import React from 'react'
import Tasks from "./Tasks"
import Button from "./Button"
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const AllTasks = () => {

    var tasks = useSelector(state => state.tasks)

    return (
        <div>
            {tasks.length > 0 ? <Tasks/> : 'nothing'}
            <Link to="/" ><Button text="Home"></Button></Link>
            
        </div>
    )
}

export default AllTasks
