import React, { useEffect, useState } from 'react'
import Axios  from "axios"
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';



const Updata =({setArrTD})=>{

const [objTodos,setobjTodos]=useState({title:"",tags:["",""],completed:false})

    
    const UpdataOne = async()=>{
    
        const response= await Axios.put("http://localhost:5000/api/Todos/update",{title:objTodos.title,tags:objTodos.tags,completed:objTodos.completed})
    
     //  setArrTD(response.data)
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

<h1> </h1>

<TextField 

id="outlined-basic" 

label=" Full tow tags " 

variant="outlined"

value={[objTodos.tags]}

onChange={(event)=>{setobjTodos({
  ...objTodos, 
  tags: (event.target.value).split(",")

})}}/>

<h1> </h1>
<Checkbox
      checked={objTodos.completed}
      onChange={ handleChange1}
 />

    <h1>{String(objTodos.completed)}</h1>
    
    <button onClick={UpdataOne}>Send</button>
    

    </div>
)}

export default Updata