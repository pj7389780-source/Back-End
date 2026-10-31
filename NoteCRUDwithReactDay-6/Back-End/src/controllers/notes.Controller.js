const notesModel = require("../Models/Model.Notes");

const justaController = (req, res) => {
  res.send("okkk you can be a great coder");
};
const createNoteController = async (req, res) => {
  const body = req.body;
  const newNote = await notesModel.create(body);
  res.send(newNote);
};
const getallnotesController = async (req, res) => {
  const allData = await notesModel.find();
  res.status(200).json({
    success: true,
    data: allData,
  });
};
const getSingleNoteController = async (req, res) => {
  let id = req.params.id;
  const singleData = await notesModel.findById(id);
  res.send(singleData);
};
const updatenoteController = async(req, res) => {
  const id = req.params.id;
  const data = req.body;
  const updatedData = await notesModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.send(updatedData);
};
const updateOneNoteController =async(req,res)=>{
   const id = req.params.id;
   const data = req.body;
   const updatedData = await notesModel.findByIdAndUpdate(id, data, {
     new: true,
   });
   res.send(updatedData);
}
const deleteNoteController = async (req, res) => {
  let id = req.params.id;
  await notesModel.findByIdAndDelete(id);
  res.status(200).json("Note Deleted Succesfully");
};

module.exports = {
  justaController,
  createNoteController,
  getallnotesController,
  updatenoteController,
  getSingleNoteController,
  deleteNoteController,
  updateOneNoteController,
};
