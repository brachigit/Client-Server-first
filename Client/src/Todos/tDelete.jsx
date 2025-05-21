import React, {  useState } from 'react'
import Axios  from "axios"
import TextField from '@mui/material/TextField';


const Delete =({setArrTD})=>{

const [title,setTitle]=useState("")



const DeleteOne = async()=>{

const response = await Axios.delete("http://localhost:5000/api/Todos/delete", {
    params: { title: title } 
  })
  //setArrTD(response.data)
}

    return (
<div>

<h1>delete</h1>
<TextField 

id="outlined-basic" 

label=" Full title" 

variant="outlined"

value={title}

onChange={(event)=>{setTitle( event.target.value 
)}}/>

<h1> </h1>

<button onClick={()=>{DeleteOne()}}>Send</button>


</div>
    )
}

export default Delete