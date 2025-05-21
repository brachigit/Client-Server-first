import  Axios from 'axios'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


const Delete=({setArrU}) =>{

    const [username,setusername]=useState("")

    const DeleteUser=async()=>{
   const response= await Axios.delete("http://localhost:5000/api/Users/delete",
    { params: { username: username} })
    
   setArrU(response.data)

    }


  return (
    <div>
      <h1>delete</h1>
      
      <TextField 
          
          id="outlined-basic" 
          
          label=" Full username" 
          
          variant="outlined"
          
          value={username}
          
          onChange={(event)=>{setusername(event.target.value)}}/>
          <br/>
          <br/>
          
          <button onClick={DeleteUser}>Delete</button>
    </div>
  )
}
export default Delete