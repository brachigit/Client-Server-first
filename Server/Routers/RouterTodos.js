const express=require('express')

const router = express.Router()

 const TodosController = require("../Controllers/TodosController")

router.get("/read",TodosController.ReadAllTodos)

router.post("/create",TodosController.CreateNewTodos)

router.delete("/delete",TodosController.DeleteTodos)

router.put("/update",TodosController.UpdateTodos)

router.put("/updataCompleted",TodosController.UpdataCompleted)

module.exports=router;