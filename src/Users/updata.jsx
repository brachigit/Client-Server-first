import React , {useState} from 'react'
import Axios from "axios"
import TextField from '@mui/material/TextField';

const  Updata =({setArrU})=>{
    const [objUsers,setobjUsers]=useState({name:"",username:"",email:"",address:"",phone:""})

    const Updatauser =async()=> {
    
    const response = await Axios.put("http://localhost:5000/api/Users/update",{
        name:objUsers.name,username:objUsers.username,email:objUsers.email,
        address:objUsers.address,phone:objUsers.phone})
    
    setArrU(response.data)
    
    }
    
    
      return (
        
      <div>
    <h1>updata</h1>
    <TextField 
    
    id="outlined-basic" 
    
    label=" Fill name" 
    
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
    
    label=" Fill username" 
    
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
    
    label=" Fill email" 
    
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
    
    label=" Fill address" 
    
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
    
    label=" Fill phone" 
    
    variant="outlined"
    
    value={objUsers.phone}
    
    onChange={(event)=>{setobjUsers({
    
      ...objUsers, 
      phone: event.target.value 
    
    })}}/>

<br/>
<br/>

    <button onClick={Updatauser}>Send</button>
     </div>)
}

export default Updata