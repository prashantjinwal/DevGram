import express from "express"
const app = express();

app.get('/', (res,res)=>{
    res.send("server is ready");
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server ready at http://localhost:${port}`)
})
 