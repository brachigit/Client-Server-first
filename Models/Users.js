
const mongoose=require('mongoose')

const Userschema=new mongoose.Schema(
{
name:{
    type:String,
    required:true
},

username:{
    type:String, 
     unique: true ,
    required:true
  
},

email:{
    type:String,
    required:true
    
},

address:{
    type:String,
    required:true
},
phone:{
    type:String,
    maxLength:11
}},
 {
    timestamps:true
 }
)

module.exports=mongoose.model('Users',Userschema)