const mongoose = require("mongoose")
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Error while connecting ",error)
    }
}


module.exports = connectDB