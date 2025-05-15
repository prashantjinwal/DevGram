import express from "express"
import connectDB from "./db/db.js";
import dotenv from "dotenv";
const app = express();


dotenv.config({
    path: './env'
})
connectDB();

// testing
// app.get('/joke1', (req, res) => {
//   res.json({ joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" });
// });



app.get('/', (req,res)=>{
    res.send("server is ready");
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`server ready at http://localhost:${port}`)
})
 