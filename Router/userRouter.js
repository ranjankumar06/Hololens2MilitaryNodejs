const express = require("express");
const userController=require("../Controller/user")
const router = express.Router();

router.post("/players",userController.createPlayer)
router.get("/allPlayers",userController.getAllplayers)
module.exports=router