const express = require("express");
const router=express.Router();
const studentController=require("../controllers/studentsController");

//View All Record
router.get("/",studentController.view);

//Add New Records
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save);


//Update Records
router.get("/edituser/:id",studentController.edituser);
router.post("/edituser/:id",studentController.edit);

//Delete Records
router.get("/deleteuser/:id",studentController.delete);

module.exports=router;

