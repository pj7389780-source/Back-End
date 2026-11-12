import express from 'express'
import { authController } from '../controller/auth.controller.js';
import { authenicate } from '../middleware/auth.middleware.js';
import userModel from '../model/user.model.js';
import bcrypt from 'bcrypt';
const router = express.Router()
router.post("/api/auth/register",authController)
router.get("/api/auth/me",authenicate,(req,res)=>{
    res.status(200).json({
        message:"Authenicated User"
    })
})
router.post("/api/auth/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({email})
    const authUser = await bcrypt.compare(password,user.password)
    if(!authUser){
        res.status(401).json({
            message:"Invalid email or password"
        })
    }
    res.status(200).json({
        message:"Authenticated User"
    })
})
export default router;