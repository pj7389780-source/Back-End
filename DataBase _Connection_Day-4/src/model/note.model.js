const { default: mongoose } = require("mongoose");

const notesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        minLength:20,
    }
})


const NotesModel = mongoose.model("Notes",notesSchema)

module.exports = NotesModel;