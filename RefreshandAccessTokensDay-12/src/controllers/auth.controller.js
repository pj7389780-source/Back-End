import userModel from "../models/auth.model.js";
import bcrypt from 'bcryptjs';
import { createTokens, verifyRefreshToken, verifyUser } from "../util/auth.js";

export const createUserController = async (req, res) => {
    const { name, email, password } = req.body;
   try {
    const isValid = await userModel.findOne({email})
    if(isValid){
      res.status(409).json({
        message:"User already Exists"
      })
      return;
    }
     await userModel.create({
       name,
       email,
       HashPassword: await bcrypt.hash(password, 10),
     });
     const user = await userModel.findOne({ email });
     const { accessToken, refreshToken } = await createTokens({
       userId: user._id,
     });
     user.refreshToken = refreshToken;
     await user.save();
     res.cookie("refreshToken", refreshToken, { httpOnly: true });
     res.status(201).json({
       message: "User created successfully",
       data: {
         name: user.name,
         email: user.email,
       },
       accessToken,
     });
   } catch (error) {
    res.status(500).json({
      message:error.message
   })
   }
};
export const authUserController = async (req, res) => {
  const accessToken = req.headers.authorization;
  try {
    if (!accessToken) {
      res.status(404).json({
        message: "Expired or Invalid token",
      });
      return;
    }
    const decoded = await verifyUser(accessToken);
    res.status(200).json({
      message: "User Found",
      data: {
        name: decoded.name,
        email: decoded.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:error.message
  })
  }
};
export const regenerateTokenController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
 try {
   const decoded = await verifyRefreshToken(refreshToken);
   const user = await userModel.findOne({ _id: decoded.userId });
   if (user.refreshToken != refreshToken) {
     user.refreshToken = null;
     res.status(401).json({
       message: "Invalid or expired Token",
     });
     return;
   }
   const { accessToken, refreshToken: newRefreshToken } = await createTokens({
     userId: user._id,
   });
   user.refreshToken = newRefreshToken;
   await user.save();
   res.cookie("refreshToken", newRefreshToken);
   res.status(200).json({
     message: "Access token regenerated",
     data: {
       name: user.name,
       email: user.email,
     },
     accessToken,
   });
 } catch (error) {
  res.status(500).json({
    message:error.message
  })
 }
};

