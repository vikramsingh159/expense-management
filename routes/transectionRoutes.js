const express = require("express");
const {
    addTransection,
    getAllTransection,
    editTransection,
    deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add_transection", addTransection);
//Edit transection POST MEthod
router.post("/edit_transection", editTransection);
//Delete transection POST MEthod
router.post("/delete_transection", deleteTransection);

//get transections
router.post("/get_transection", getAllTransection);

module.exports = router;