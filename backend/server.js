import express from "express";
import cors from "cors";

// app config

const app = express()
const port = 4000

// middleware

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
  res.send("API trabalhando...")
})

app.listen(port, ()=>{
    console.log(`Server Iniciado em http://localhost:${port}`)
})