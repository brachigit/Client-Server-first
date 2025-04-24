import React , {useState} from 'react'
import Axios from "axios"
import TextField from '@mui/material/TextField';

const  Create =({setArrU})=>{
    const [objUsers,setobjUsers]=useState({name:"",username:"",email:"",address:"",phone:""})

    const AddNewUser = async ()=> {
    
    const response = await Axios.post("http://localhost:5000/api/Users/create",{
        name:objUsers.name,username:objUsers.username,email:objUsers.email,
        address:objUsers.address,phone:objUsers.phone})

        setArrU(response.data)
    }
    

      return (
        
      <div>
    <h1>create</h1>
    
    <TextField 
    
    id="outlined-basic" 
    
    label=" Full name" 
    
    variant="outlined"
    
    value={objUsers.name}
    
    onChange={(event)=>{setobjUsers({
    
      ...objUsers, 
      name: event.target.value 
    
    })}}/>
    <br/>
    <br/>
    <TextField 
    
    id="outlined-basic" 
    
    label=" Full username" 
    
    variant="outlined"
    
    value={objUsers.username}
    
    onChange={(event)=>{setobjUsers({
    
      ...objUsers, 
      username: event.target.value 
    
    })}}/>
    <br/>
    <br/>
    <TextField 
    
    id="outlined-basic" 
    
    label=" Full email" 
    
    variant="outlined"
    
    value={objUsers.email}
    
    onChange={(event)=>{setobjUsers({
    
      ...objUsers, 
      email: event.target.value 
    
    })}}/>
     <br/>
     <br/>
   <TextField 
    
    id="outlined-basic" 
    
    label=" Full address" 
    
    variant="outlined"
    
    value={objUsers.address}
    
    onChange={(event)=>{setobjUsers({
    
      ...objUsers, 
      address: event.target.value 
    
    })}}/>

    <br/>
    <br/>

    <TextField 
    
    id="outlined-basic" 
    
    label=" Full phone" 
    
    variant="outlined"
    
    value={objUsers.phone}
    
    onChange={(event)=>{setobjUsers({
    
      ...objUsers, 
      phone: event.target.value 
    
    })}}/>

<br/>
<br/>

    <button onClick={ AddNewUser}>Send</button>
     </div>
 )}

export default Create 