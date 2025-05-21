import React, { useState,useEffect } from 'react'
import Axios from "axios"
import {Outlet} from "react-router-dom"
import Create from './create'
import Updata from './updata'
import  Delete from './delete'

const Posts = ()=> {

  const [arrP,setArrP]=useState([])
  

  const Loadposts=async()=>{

  const response=await Axios.get("http://localhost:5000/api/Posts/read")

  setArrP(response.data)
    }    
    
    useEffect(()=>{Loadposts()
    }  ,[] )

    
  return (

    <div>
      <h1>Posts</h1>
    <main><Outlet/></main>  
  
  <Create setArrP={setArrP}/>
  <Delete setArrP={setArrP}/>
  <Updata setArrP={setArrP}/>
  

  {arrP.map((post,index)=>{
              return (
       <div key={post._id}>
       <h1>{post._id}</h1>
       <h1>{post.title}</h1>
       <h1>{post.body}</h1>
       </div>
    )}) }

     </div>
 
)}
export default Posts