const Posts=require('../Models/Posts')

const CreateNewPost=async(req,res)=>{

    const {title,body}=req.body

    if (!title){

     return res.status(400).json({message:'fields are required'})

    }
    const post=await Posts.create({title:title,body:body})

    const posts=await Posts.find().sort({_id:1}).lean()

   return res.json(posts)
}

const ReadAllPosts=async(req,res)=>{

const posts=await Posts.find().lean()

if(!posts){
    
    return res.status(400).json({messege:'No pots found'})
}

res.json(posts)

}

const UpdatePost=async(req,res)=>{
    
const {title,body}=req.body

if(!title)
{
    return res.status(400).json({message:'fields are required'})
}

const post=await Posts.findOne({title}).exec()

if(!post)

return res.status(400).json({message:'post whis this title not found'})

post.body=body

await post.save()

const posts=await Posts.find().sort({_id:1}).lean()

return res.json(posts)
}



const Deletepost=async(req,res)=>{

const {title}= req.query

if(!title)
{
    res.status(400).json({ message: 'not accept title' })
}

const result=await Posts.deleteOne({title})

if(result.deletedCount==0)

{return res.status(400).json({ message: 'Post not found' })}

const posts=await Posts.find().sort({_id:1}).lean()

return res.json(posts)

}
module.exports = {CreateNewPost,
                 ReadAllPosts,
                 UpdatePost, 
                 Deletepost,
                }
