const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("hellloo")
    res.end("Hellooooo")
})

server.listen(3000,()=>{
    console.log("hello")
})