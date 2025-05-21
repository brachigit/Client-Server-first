import React ,{useState} from 'react'
import Axios from "axios"
import TextField from '@mui/material/TextField';

const Updata=({setArrP})=>{

    const [objPosts,setobjPosts]=useState({title:"",body:""})

    const UpdataPosts =async()=> {
    
    const response = await Axios.put("http://localhost:5000/api/Posts/update",{title:objPosts.title,body:objPosts.body})
    
    //setArrP(response.data)
    
    }
    
    
      return (
        
      <div>
    <h1>updata</h1>
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
    
    label=" Full body " 
    
    variant="outlined"
    
    value={objPosts.body}
    
    onChange={(event)=>{setobjPosts({
      ...objPosts, 
      body: event.target.value
    
    })}}/>
    <br/>
    <br/>
    
    <button onClick={UpdataPosts }>Send</button>
     </div>)
}
    

export default Updata