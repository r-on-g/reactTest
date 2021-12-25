import { useEffect } from "react"
import AllTasks from "./components/AllTasks"
import Home from "./components/Home"
import SingleTask from "./components/SingleTask"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login"
import { useDispatch,useSelector } from 'react-redux';
import {fetchTask} from "./actions/allTasks.js"

const App = () => {

  
  //const [tasks, setTasks] = useState([])
  const dispatch = useDispatch()
  var tasks = useSelector(state => state.tasks)
  var isLogged = useSelector(state => state.isLogged)
  console.log(tasks)

  useEffect(() => {
    
    dispatch(fetchTask())
    //dispatch(updateTask())
    //getTasks()
    
  },[isLogged])
  
  // const getTasks = async() => {

  //   dispatch(updateTask())
  //   // var tasksfromServer = await fetchTasks()
  //   // tasksfromServer = tasksfromServer.filter( (t) => t.createdBy === localStorage.getItem("id") )
  //   //setTasks(tasksfromServer)
  // }

  // const fetchTasks = async () => {
  //   const res = await axios.get('http://localhost:5000/tasks')

  //   return res.data.result
  // }



  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tasks" element={<AllTasks/>} />
        <Route exact path="/tasks/:taskId" element={<SingleTask id={1}/>} />
        <Route exact path="/user/signup" element={<Signup/>}/>
        <Route exact path="/user/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
