import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
//env
dotenv.config();
connectDB
//rest
const app = express();
//middelwares
app.use(morgan("dev"));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>welcome to Shopivi</h1>");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log('server running on$ ${PORT} '.bgCyan.white);
});