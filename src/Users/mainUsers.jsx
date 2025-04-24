import React, { useState,useEffect } from 'react'
import Axios from "axios"
import {Outlet} from "react-router-dom"
import Create from './create'
import Updata from './updata'
import  Delete from './delete'

const Users = ()=> {

  const [arrU,setArrU]=useState([])
  
  const Loadusers=async()=>{

  const response=await Axios.get("http://localhost:5000/api/Users/read")

  setArrU(response.data)
    }    
    
    useEffect(()=>{Loadusers()
    }  ,[] )

    
  return (

    <div>
    <h1>Users</h1>

    <main><Outlet/></main>  
  
  <Create setArrU={setArrU}/>
  <Delete setArrU={setArrU}/>
  <Updata setArrU={setArrU}/>
  

  {arrU.map((user,index)=>{
              return (
       <div key={user._id}>
       <h1>{user._id}</h1>
       <h1>{user.name}</h1>
       <h1>{user.username}</h1>
       <h1>{user.email}</h1>
       <h1>{user.address}</h1>
       <h1>{user.phone}</h1>
       </div>
    )}) }

     </div>
)}
export default Users