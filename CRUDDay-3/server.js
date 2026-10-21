const express = require("express")
const app = express();
const port = 3000;

app.use(express.json());



let users = [];

app.get("/",(req,res)=>{
    res.send(users);
})

app.post("/create",(req,res)=>{
    const body = req.body;
    users.push(body)
    res.send("User saved Successfully")
})


app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const userData = users.filter((val)=>(val.id !== Number(id))) 
    users = userData
    res.send("user deleted successfully");
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



