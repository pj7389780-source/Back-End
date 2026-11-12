import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import userModel from '../models/auth.model.js';
export const createTokens = async({userId})=>{
    const accessToken = jwt.sign(
      {
        userId,
      },
      config.ACCESS_SECRET_KEY,
      { expiresIn: "15m" },
    );
    const refreshToken = jwt.sign(
      {
        userId,
      },
      config.REFRESH_SECRET_KEY,
      {expiresIn:"7d"}
    );
    return {accessToken,refreshToken}
}
export const verifyUser = async(accessToken)=>{
    const user = jwt.verify(accessToken,config.ACCESS_SECRET_KEY);
    console.log(user)
    const decoded = await userModel.findOne({_id:user.userId});
    return decoded;
}
export const verifyRefreshToken = async(refreshToken)=>{
    const decoded = await jwt.verify(refreshToken,config.REFRESH_SECRET_KEY);
    return decoded
}