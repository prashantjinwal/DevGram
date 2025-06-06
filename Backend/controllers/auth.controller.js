import User from "../models/login.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import generateUniqueUsername from "../functions/genrateusername.js"


export const registerUser = async (req, res) =>{
    try {
        const {email, password, bio} = req.body;

        // check if user existsz
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }

        // hash pasword
        const hashedPassword = await bcrypt.hash(password, 10);
        // const newUser = await User({email, password:hashedPassword});
        const username = await generateUniqueUsername(email);

        const newUser = await User({
            email,
            password:hashedPassword,
            profile:{
                username,
                followers: 0,
                following: 0,
                bio,
            }
        })

        await newUser.save();
        res.status(201).json({message: "User registed successfully"})

    } catch (err) {
        res.status(500).json({message : "Something went wrong", error: err.message});
    }

}

export const loginUser = async (req,res) =>{
    try {
        const {email, password} = req.body;

        // check user 
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"invaild credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: "Invaild credentials"});
        }
        
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{ expiresIn:"1hr"});

        res.status(200).json({
            message: "Login successful",
            token,
            user:{id: user._id, email:user.email }
        })


    } catch (err) {
        res.status(500).json({message:"something went wrong", error: err.message});
        
    };

}