import {Router} from "express"
import { authUserController, createUserController, regenerateTokenController } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register",createUserController)
router.get("/me",authUserController)
router.get("/refresh", regenerateTokenController);
export default router;