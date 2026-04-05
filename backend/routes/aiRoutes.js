import express from "express";
import { improveText } from "../controllers/aiController.js";

const router = express.Router();

router.post("/improve", improveText);

export default router;