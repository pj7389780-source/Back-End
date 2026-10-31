const express = require("express");
const {
  justaController,
  createNoteController,
  deleteNoteController,
  getallnotesController,
  updatenoteController,
  getSingleNoteController,
  updateSingleEntityController,
} = require("../controllers/notes.Controller");

const router = express.Router();


//get
router.get("/", justaController);
router.get("/allNotes", getallnotesController);
router.get("/oneNote/:id", getSingleNoteController);

//post
router.post("/create", createNoteController);

//patch
router.patch("/updatepatch/:id", updateSingleEntityController);

//put
router.put("/update/:id", updatenoteController);

//delete
router.delete("/delete/:id", deleteNoteController);

module.exports = router;
