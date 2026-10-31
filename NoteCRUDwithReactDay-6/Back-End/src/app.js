const express = require("express")
const cors = require("cors")
const NotesRoute = require('./Routes/notes.route')
const app = express()
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/notes",NotesRoute)

module.exports = app