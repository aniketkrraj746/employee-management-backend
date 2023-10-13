const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
// const { getUser } = require("../controller/getUser");
const {getUser} = require("../controller/getUser")
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.get("/aniket",(req,res)=>{
    res.send(`<p>get / aniket is working</p>`)
})

module.exports = router;
