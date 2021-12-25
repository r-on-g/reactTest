import React from 'react'
import Header from "./Header"
import Tasks from "./Tasks"
import Button from "./Button"
import AddTask from "./AddTask"
import {useState} from "react"
import {Link, useNavigate  } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import {fetchTask} from "../actions/allTasks.js"
import * as api from "../api"

const Home = () => {

    const [showAddTask, setShowAddTask] = useState(false)
    const dispatch = useDispatch()
    var tasks = useSelector(state => state.tasks)
    var navigate = useNavigate ()

    const fetchSingleTask = async (id) => {
        const res = await api.fetchSingleTask(id) //axios.get(`http://localhost:5000/tasks/${id}`)

    
        return res.data
      }

    const addTask = async (task) => {
        // const res = await fetch('http://localhost:5000/tasks',
        // {method: 'POST', 
        //  headers: {'Content-type': 'application/json'},
        //  body: JSON.stringify(task),
        // })
        const update = await api.addTask(task) //axios.post("http://localhost:5000/tasks",task)
        dispatch(fetchTask())
        //dispatch(updateTask())
    
         //const data = await res.json()
         //setTasks([...tasks,data])
    
        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
      }
    
      const deleteTask = async (id) => {
        //await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
        const update = await api.deleteTask(id) //axios.delete(`http://localhost:5000/tasks/${id}`)
        dispatch(fetchTask())
        //dispatch(updateTask())
        //setTasks(tasks.filter((task) => task._id !== id))
      }
    
      const toggleReminder = async (id) => {
        const singleTask = await fetchSingleTask(id)
        //const updatedReminder = !taskToggle.taskReminder
        // const updateTask = {...taskToggle, taskReminder: !taskToggle.taskReminder}
        //console.log(updatedReminder)
        const update = await api.updateTask(id,singleTask)//axios.patch(`http://localhost:5000/tasks/${id}`,{taskReminder:!singleTask.taskReminder })
        dispatch(fetchTask())
        //dispatch(updateTask())
    
        // const data = await res.json()
    
        // setTasks(tasks.map((task) => task._id === id ?
        //   { ...task, taskReminder: !task.taskReminder } : task))
      }


      let username = localStorage.getItem("username")

      const logout = () => {
        localStorage.clear()
        dispatch({type:"LOG_OUT"})
        navigate("/")
      }

    return (
      <div>
          <Link to="/user/signup" ><Button text="Signup" ></Button></Link>
          <Link to="/user/login" ><Button text="Login" ></Button></Link>
          <h1>{username}</h1>
          {username && <Button text="Log out" onClick={logout}></Button>}
        <div className="container">
          <Header showTask={() => { setShowAddTask(!showAddTask) }} showAddTask={showAddTask} />
          <Link to="/tasks" ><Button text="Show All Tasks" ></Button></Link>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks?.length > 0 ? <Tasks onDelete={deleteTask}
            ontoggle={toggleReminder} /> : 'nothing'}
        </div>
      </div>
    )
}

export default Home