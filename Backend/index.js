import express from "express"
import connectDB from "./db/db.js";
import dotenv from "dotenv";

const app = express();
connectDB();

dotenv.config({
    path: './env'
})

app.get('/', (req,res)=>{
    res.send("server is ready");
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`server ready at http://localhost:${port}`)
})
 