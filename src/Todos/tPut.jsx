import React, { useEffect, useState } from 'react'
import Axios  from "axios"
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';



const UpdateC =({setArrTD})=>{

const [objTodos,setobjTodos]=useState({title:"",completed:false})

    
    const UpdataOne = async()=>{
    
        const response= await Axios.put("http://localhost:5000/api/Todos/UpdataCompleted",{title:objTodos.title,completed:objTodos.completed})
    
       // setArrTD(response.data)
    }
    
const handleChange1 = (event) => {
  setobjTodos({
   ...objTodos,
  completed: event.target.checked
 })}

return (
    <div>

 <h1>update</h1>
<TextField 

id="outlined-basic" 

label=" Full title" 

variant="outlined"

value={objTodos.title}

onChange={(event)=>{setobjTodos({

  ...objTodos, 
  title: event.target.value 

})}}/>
<br/>
<br/>
<Checkbox
      checked={objTodos.completed}
      onChange={ handleChange1}
 />  
 <br/>
 <br/>  
    <button onClick={UpdataOne}>Send</button>
    

    </div>
)}

export default UpdateC