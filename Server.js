
require('dotenv').config()

const express=require('express')

const app=express()

const PORT=process.env.PORT||1003

const mongoose=require('mongoose')

const cors=require('cors')

const corsOptions=require('./Config/corsOpertion')

const connectDB=require("./Config/dbconn")

connectDB()

app.use(cors(corsOptions))

app.use(express.json())

//app.use(express.static("public"))//בשביל תמונות בתקיית ששמה public 

app.use("/api/Users", require("./Routers/RouterUser"))

app.use("/api/Posts", require("./Routers/RouterPosts"))

app.use("/api/Todos", require("./Routers/RouterTodos"))

mongoose.connection.once('open',()=>{

   console.log('connected to MongoDB')

app.listen(PORT,()=>
{
    console.log(`Server run on  PORT  ${PORT}`)
})

mongoose.connection.on('error',err=>{console.log(err)})   
     
})