import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config();

export const authenicate = (req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if (!token) {
          return res.status(401).json({
            message: "Unauthorized: Token missing",
          });
        }
        const isValid = jwt.verify(token, process.env.JSON_SECRET_KEY);
        req.user = isValid;
        next();
    } catch (error) {
        res.status(500).json({
            message:"Expired or Invalid token"
        })
    }
}