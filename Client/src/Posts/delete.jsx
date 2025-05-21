import  Axios from 'axios'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


const Delete=({setArrP}) =>{

    const [title,setTitle]=useState("")

    const DeletePost=async()=>{
   const response= await Axios.delete("http://localhost:5000/api/Posts/delete",
    { params: { title: title } })
    
   //setArrP(response.data)

    }


  return (
    <div>
      <h1>delete</h1>
      
      <TextField 
          
          id="outlined-basic" 
          
          label=" Full title" 
          
          variant="outlined"
          
          value={title}
          
          onChange={(event)=>{setTitle(event.target.value)}}/>
          <br/>
          <br/>
          
          <button onClick={DeletePost}>Delete</button>
    </div>
  )
}
export default Delete