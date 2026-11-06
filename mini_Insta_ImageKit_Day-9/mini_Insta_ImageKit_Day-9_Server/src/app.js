import express from 'express'
import connectDB from './config/DBconnect.config.js';
import router from './route/post.route.js';
import upload from './config/multer.config.js';
const app = express()
connectDB()
app.use(express.json())

app.use("/MiniInsta", upload.single("Image"), router);
export default app;