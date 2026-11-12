import userModel from "../model/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
dotenv.config()

export const authController = async (req, res) => {
  const { name, email, password } = req.body;

  await userModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });
  const token = jwt.sign(
    {
      name,
      email,
    },
    process.env.JSON_SECRET_KEY,
  );
  res.status(201).json({
    name,
    email,
    token,
  });
};