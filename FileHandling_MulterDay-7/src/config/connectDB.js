const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://pj7389780_db_user:pARAS_JAIN_123@cluster0.sv0411w.mongodb.net/")
        console.log("Database Connected")
    } catch (error) {
        console.log('Error while connecting to Database',error)
    }
}

module.exports = connectDB;