const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name:String,
    age:Number,
    profilePic:String
})

const profileModel = mongoose.model("profile",profileSchema)
module.exports = profileModel;