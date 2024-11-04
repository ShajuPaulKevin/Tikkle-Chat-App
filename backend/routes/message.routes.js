import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoutes from "../middleware/protectRoutes.js";
const router = express.Router();

router.post("/send/:id", protectRoutes, sendMessage);
router.get("/get/:id", protectRoutes, getMessages);

export default router;
