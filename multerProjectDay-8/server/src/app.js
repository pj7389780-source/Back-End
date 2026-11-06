const express = require("express");
const cors = require("cors")
const router = require("./routes/files.route");
const upload = require("./config/multer.config");
const connectDB = require("./config/connectDB.config");
const app = express();
app.use(express.json())
connectDB()
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("",upload.single("images"),router );
module.exports = {
    express,
    app
};