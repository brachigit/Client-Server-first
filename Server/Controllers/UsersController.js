const Users=require("../Models/Users")

const CreateNewUsers=async(req,res)=>{

    const {name,username,email,address,phone}=req.body

    if(!name||!username||!email||!address)
        {
            return res.status(400).json({message:'fields are required'})
        }

    obj = await Users.findOne({username}).exec()

    if (obj){
      return res.status(400).json({message:'you send username not unique'})
    }
    
    await Users.create( {name,username,email,address,phone})

const users=await Users.find().sort({_id:1}).lean()
   
      return res.json(users)

}

const ReadAllUsers= async (req,res)=>{

const users=await Users.find().lean()

if(!users){
    
    return res.status(400).json({messege:'No users found'})
}

res.json(users)

}

const UpdateUsers=async(req,res)=>{

const  {name,username,email,address,phone} = req.body

if(!name||!username||!email||!address)
{
    return res.status(400).json({message:'fields are required'})
}

const user=await Users.findOne({username}).exec()

if (!user){

return res.status(400).json({message:'Users whis this title not found'})}

user.name=name
user.email=email
user.address=address
user.phone=phone

await user.save()
   
return res.json(users)
}

const DeleteUsers= async (req,res)=>{

const {username}=req.query

if(!username)
{
    res.status(400).json({ message: 'not accept username' })
}

const user=await Users.deleteOne({username}).exec()

if(user.deletedCount==0)

{
    return res.status(400).json({ message: 'Username not found' })
}
    

return res.json(users)

}

module.exports={CreateNewUsers
                ,ReadAllUsers,
                 UpdateUsers, 
                 DeleteUsers}

