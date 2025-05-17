import express, { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { loginUser } from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser )

export default router;