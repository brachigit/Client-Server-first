const mongoose =require('mongoose')

const Todoschema=mongoose.Schema({

title:{
  type:String,
  unique: true,
  required:true
},
tags:{
    type:[String]
},
completed:{
    type:Boolean,
    default:false
}


},
{
    timestamps:true
})

module.exports=mongoose.model('Todos',Todoschema)