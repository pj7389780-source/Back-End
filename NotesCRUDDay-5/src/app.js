const express = require("express")
const NotesRoute = require('./Routes/notes.routes')
const app = express()
app.use(express.json())

app.use("/notes",NotesRoute)

module.exports = app