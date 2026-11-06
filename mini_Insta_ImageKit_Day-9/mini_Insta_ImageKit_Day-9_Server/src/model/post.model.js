import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true,
    }
})
const postModel = mongoose.model("postModel", postSchema);
export default postModel;