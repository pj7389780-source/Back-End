const express = require("express")
const app = express()
const connectDB = require("./config/DataBase")
const NotesModel = require("./model/note.model")
app.use(express.json())
connectDB()
app.get("/",(req,res)=>{
    res.send("hello")
})
app.post("/create",async(req,res)=>{
    const {title,description} = req.body;
    const NotesData = await NotesModel.create({
        title,
        description,
    })
    res.send({
        success:true,
        status:"OK get it",
        data:NotesData,
    });
})

module.exports = app