const express=require('express')

const router = express.Router()

 const UsersController = require("../Controllers/UsersController")

router.get("/read",UsersController.ReadAllUsers)

router.post("/create",UsersController.CreateNewUsers)

router.delete("/delete",UsersController.DeleteUsers)

router.put("/update",UsersController.UpdateUsers)

module.exports=router;