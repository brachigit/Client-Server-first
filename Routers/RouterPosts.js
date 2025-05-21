const express=require('express')

const router = express.Router()

 const PostsController = require("../Controllers/PostsController")

router.get("/read",PostsController.ReadAllPosts)

router.post("/create",PostsController.CreateNewPost)

router.delete("/delete",PostsController.Deletepost)

router.put("/update",PostsController.UpdatePost)

module.exports=router;
