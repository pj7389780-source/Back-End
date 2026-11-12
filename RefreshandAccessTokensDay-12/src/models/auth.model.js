import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must be greater than 2 characters"],
    maxLength: [50, "Name must be within 50 character"],
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  HashPassword:{
    required:true,
    type:String,
    minLength:[6,"Password must be more than 5 character"],
  },
  refreshToken:{
    type:String,
  }
},{timestamps:true});

const userModel = mongoose.model("userModel",userSchema)
export default userModel;