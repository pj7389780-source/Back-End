const express = require('express');
const { createController } = require('../controller/create.controller');
const profileModel = require('../schema/profile.schema');
const router = express.Router()
router.post("/create",createController)
router.get("/profiles",async(req,res)=>{
    const data = await profileModel.find();
    res.send(data)
})
module.exports = router;