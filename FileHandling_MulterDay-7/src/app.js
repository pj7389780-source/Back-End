const express = require('express')
const connectDB = require('./config/connectDB')
const upload = require('./config/multer')
const app = express()
connectDB()


app.get("/",(req,res)=>{
    res.send("Main Route")
})

app.post("/file",upload.array("Images"),(req,res)=>{
    res.send("file recieved successfully");
})

module.exports = app