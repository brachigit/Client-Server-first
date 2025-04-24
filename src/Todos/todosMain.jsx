import React, { useState,useEffect } from 'react'
import Axios from "axios"
import {Outlet} from "react-router-dom"
import Create from './create'
import Updata from './updata'
import  Delete from './tDelete'

const Todos = ()=> {

  const [arrTD,setArrTD]=useState([])
  

  const Loadtodos=async()=>{

  const response=await Axios.get("http://localhost:5000/api/Todos/read")

  setArrTD(response.data)
    }    
    
    useEffect(()=>{Loadtodos()
    }  ,[] )

    
  return (

    <div>
      <h1>Todos</h1>
    <main><Outlet/></main>  
  
  <Create setArrTD={setArrTD}/>
  <Updata setArrTD={setArrTD}/>
  <Delete setArrTD={setArrTD}/>

  {arrTD.map((Tod,index)=>{
              return (
       <div key={Tod._id}>
       <h1>{Tod._id}</h1>
       <h1>{Tod.title}</h1>
       <h1>{Tod.tags.join(',')}</h1>
       </div>
    )}) }

     </div>
 
)}
export default Todos