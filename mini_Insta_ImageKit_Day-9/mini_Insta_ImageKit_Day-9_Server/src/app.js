import express from 'express'
import connectDB from './config/DBconnect.config.js';
import router from './route/post.route.js';
import upload from './config/multer.config.js';
import cors from 'cors'
const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
connectDB()
app.use(express.json())
app.get("/",(req,res)=>{
  res.send("Backend is running successfully")
})
app.use("/MiniInsta", upload.single("Image"), router);
export default app;