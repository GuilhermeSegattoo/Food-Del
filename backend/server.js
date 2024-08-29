import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config

const app = express()
const port = 4000

// middleware

app.use(express.json());
app.use(cors());

// db conexão
connectDB();

// API endpoint

app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))


app.get("/", (req,res)=>{
  res.send("API trabalhando...")
})

app.listen(port, ()=>{
    console.log(`Server Iniciado em http://localhost:${port}`)
})

// mongodb+srv://segattoguilherme:<db_password>@cluster0.y9nql.mongodb.net/?