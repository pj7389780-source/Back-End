import express from "express"
import connectDB from "../config/connectDB.config.js";
import router from "../route/auth.route.js";
connectDB();
const app = express();

app.use(express.json());

app.use("",router);
app.get("/main",(req,res)=>{
    res.status(200).json({
        message:"Everything is fine"
    })
})
export default app;