import uploadFile from "../services/ImageKit.service.js";
import postModel from "../model/post.model.js";

export const postController = async(req, res) => {
  const caption = req.body;
  const file = req.file;
  const response = await uploadFile(file.buffer, file.originalname);
  await postModel.create({
    caption:caption.caption,
    Image: response.url,
  });
  res.send("Chall chall sab thik hai");
};
export const getAllPost = async(req,res)=>{
  const posts = await postModel.find();
  res.status(200).json({
    message:"Posts fetched successfully",
    success:true,
    posts,
  })
}
