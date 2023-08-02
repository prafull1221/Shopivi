import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import connectDB from "./config/db.js";
import cors from "cors";
//env
dotenv.config();
connectDB();
//rest
const app = express();

//middelwares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("<h1>welcome to Shopivi</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('server running on$ ${PORT} '.bgCyan.white);
});