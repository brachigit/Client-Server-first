import React , {useState} from 'react'
import Axios from "axios"
import TextField from '@mui/material/TextField';

const  Create =({setArrP})=>{
    const [objPosts,setobjPosts]=useState({title:"",body:""})

    const AddNewPosts =async()=> {
    
    const response = await Axios.post("http://localhost:5000/api/Posts/create",{title:objPosts.title,body:objPosts.body})
    
    //setArrP(response.data)
    
    }
    
    
      return (
        
      <div>
    <h1>create</h1>
    <TextField 
    
    id="outlined-basic" 
    
    label=" Full title" 
    
    variant="outlined"
    
    value={objPosts.title}
    
    onChange={(event)=>{setobjPosts({
    
      ...objPosts, 
      title: event.target.value 
    
    })}}/>
    <br/>
    <br/>
    <TextField 
    
    id="outlined-basic" 
    
    label=" Full tow tags " 
    
    variant="outlined"
    
    value={objPosts.body}
    
    onChange={(event)=>{setobjPosts({
      ...objPosts, 
      body: event.target.value
    
    })}}/>
    <br/>
    <br/>
    
    <button onClick={AddNewPosts}>Send</button>
     </div>)
}

export default Create 