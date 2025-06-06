import express, { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { loginUser } from "../controllers/auth.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";
import User from "../models/login.models.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser )

router.get("/profile",authenticateUser, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select("-password")
        if(!user){
            return res.status(404).json({message: "user not found"})
        }
        res.status(200).json({ profile: user.profile, email: user.email });
    }catch(error){
        res.status(500).json({message: "server error", error:error.message })
    }
})

export default router;