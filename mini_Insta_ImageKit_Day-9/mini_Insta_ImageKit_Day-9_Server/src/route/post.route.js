import express from 'express'
import { getAllPost, postController } from '../controller/post.controller.js';
const router = express.Router();
router.post("/create", postController);
router.get("/getAll", getAllPost);
export default router;