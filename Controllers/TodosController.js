const Todos=require('../Models/Todos')

const CreateNewTodos=async(req,res)=>{

    const {title,tags,completed}=req.body

    if ( !title || !tags ){
    
        return res.status(400).json({message:'fields are required'})  
}
obj=await Todos.findOne({title}).exec()

if(obj){

    return res.status(400).json({message:'title is not unique'})  
}

    const todo=await Todos.create({title,tags,completed})

    if(todo)
    {
    const todos=await Todos.find().sort({_id:1}).lean()
     return res.json(todos);
    }

    else

    return res.status(400).json({message:'Invaild todo'})
}

const ReadAllTodos=async(req,res)=>{

const todos=await Todos.find().sort({_id:1}).lean()

if(todos.length===0){
    
    return res.status(400).json({messege:'No todos found'})
}

return res.json(todos)
}

const UpdateTodos=async(req,res)=>{

const {title,tags,completed}=req.body

if ( !title || !tags ){
    
        return res.status(400).json({message:'fields are required'})  
}

const todo=await Todos.findOne({title}).exec()

if(todo.length===0)

return res.status(400).json({message:'todo whis this title not found'})

todo.tags=tags
todo.completed=completed

await todo.save()

const todos=await Todos.find().sort({_id:1}).lean()

return res.json(todos);
}

const UpdataCompleted=async(req,res)=>{

    const {title,completed}=req.body
    
    if ( !title ){
        
            return res.status(400).json({message:'fields are required'})  
    }
    
    const todo=await Todos.findOne({title}).exec()
    
    if(todo.length===0)
    
    return res.status(400).json({message:'todo whis this title not found'})
    
    todo.completed=completed
    
    await todo.save()
    
    const todos=await Todos.find().sort({_id:1}).lean()
    
    return res.json(todos);
    }
    

const DeleteTodos=async(req,res)=>{

const {title} = req.query

if(!title)
{
   return res.status(400).json({ message: 'not accept title' })
}

const result=await Todos.deleteOne({title:title})

if(result.deletedCount==0)

return res.status(400).json({ message: 'Todo not found' })
else {
   const todos=await Todos.find().sort({_id:1}).lean()
     return res.json(todos);
    }
}

module.exports={CreateNewTodos
                ,ReadAllTodos,
                 UpdateTodos, 
                  DeleteTodos,
                  UpdataCompleted
                }