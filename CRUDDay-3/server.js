const express = require("express")
const app = express();
const port = 3000;

app.use(express.json());



let users = [];


// read
app.get("/",(req,res)=>{
    res.send(users);
})

// create
app.post("/create",(req,res)=>{
    const body = req.body;
    users.push(body)
    res.send("User saved Successfully")
})

// delete
app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const userData = users.filter((val)=>(val.id !== Number(id))) 
    users = userData
    res.send("user deleted successfully");
})

// update
app.put("/update/:id",(req,res)=>{
    const {id} = req.params;
    const {name} = req.body
    const userData = users.map((val)=>(val.id === Number(id)?{...val,name}:val)) 
    users = userData

    res.send(userData);
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



