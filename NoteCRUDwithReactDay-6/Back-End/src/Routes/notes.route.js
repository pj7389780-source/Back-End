const express = require("express");
const {
  justaController,
  createNoteController,
  deleteNoteController,
  getallnotesController,
  updatenoteController,
  getSingleNoteController,
  updateOneNoteController,
} = require("../controllers/notes.Controller");

const router = express.Router();

//get
router.get("/", justaController);
router.get("/allNotes", getallnotesController);
router.get("/oneNote/:id", getSingleNoteController);

//post
router.post("/create", createNoteController);

//put
router.put("/update/:id", updatenoteController);

//patch
router.patch("/updateSingleNote/:id", updateOneNoteController);

//delete
router.delete("/delete/:id", deleteNoteController);

module.exports = router;
