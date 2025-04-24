import React, { useState} from 'react'
import Axios from "axios"
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';



const Create = ({setArrTD})=> {
 
const [objTodos,setobjTodos]=useState({title:"",tags:[],completed:false})

const AddNewTodos =async()=> {

const response = await Axios.post("http://localhost:5000/api/Todos/create",{title:objTodos.title,tags:objTodos.tags,completed:objTodos.completed})

setArrTD(response.data)

}
const handleChange1 = (event) => {
  setobjTodos({
    ...objTodos,
    completed: event.target.checked
  })
}

  return (
    
  <div>
<h1>create</h1>
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
<TextField 

id="outlined-basic" 

label=" Full tow tags " 

variant="outlined"

value={[objTodos.tags]}

onChange={(event)=>{setobjTodos({
  ...objTodos, 
  tags: (event.target.value).split(",")

})}}/>
<br/>
<br/>

<Checkbox
      checked={objTodos.completed}
      onChange={ handleChange1}
 />

  <br/>
  <br/>
<button onClick={AddNewTodos}>Send</button>

   </div>
  )}

export default  Create


