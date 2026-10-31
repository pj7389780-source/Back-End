const { default: mongoose } = require("mongoose");

const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minLength:20
    }
})

const notesModel = mongoose.model("NotesModel",NoteSchema)
module.exports = notesModel;