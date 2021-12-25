import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {Link } from "react-router-dom";
import { Box } from '@mui/material';
import { useState } from "react";
import axios from "axios"

const Signup = () => {

    const [userdetails, setUserdetails] = useState([])
    
    const submitChange = (e) => {
        e.preventDefault()
        console.log(userdetails)
        axios.post("http://localhost:5000/user/signup",userdetails)
        .then((res)=> {
            if (res.status === 201) 
                alert("sign up success")
        })
        .catch((error) => {
            console.log(error.response.data)
            alert("sign up failed")
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
                <Button variant="contained" sx = {{mt:3}} type="submit"  >Sign Up</Button>
            </form>
            </Box>
        </Box>
    )
}

export default Signup
