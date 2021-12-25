import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {Link,useNavigate  } from "react-router-dom";
import { Box } from '@mui/material';
import { useState } from "react";
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux';
import {fetchTask,updateTask} from "../actions/allTasks.js"

const Login = ({getTasks}) => {

    const [userdetails, setUserdetails] = useState([])
    const dispatch = useDispatch()
    let navigate = useNavigate ()
    
    const submitChange = (e) => {
        e.preventDefault()
        console.log(userdetails)
        axios.post("http://localhost:5000/user/login",userdetails)
        .then((res)=> {
            console.log(res)
            if (res.status === 200){
                localStorage.setItem("username",userdetails.username)
                localStorage.setItem("id",res.data._id)
                alert("login success")
                dispatch({type:"LOG_IN"})
                navigate('/')
            } 
        })
        .catch((error) => {
            console.log(error.response.data)
            alert("login failed")
        })
        //setUserdetails([])

    }

    return (
        <Box>
            <Link to="/"><Button variant="contained" sx={{ml:3,mb:3,mt:3}}>Home</Button></Link>
            <Box sx={{ml:3}}>
            <form onSubmit = {submitChange}>
                <TextField variant="outlined"  id="username" label="username" onChange={(e)=>{
                    setUserdetails({...userdetails,"username": e.target.value})}}> </TextField>
                <TextField variant="outlined" id="password" label="password" type="password" onChange={(e)=>{setUserdetails({...userdetails,"password": e.target.value})}}> </TextField>
                <Button variant="contained" sx = {{mt:3}} type="submit"  >Login</Button>
            </form>
            </Box>
        </Box>
    )
}

export default Login
