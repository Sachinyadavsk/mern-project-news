import express from "express";
import dotenv from 'dotenv';
import connectDB from "./database/db.js";
import userRouter from "./routes/user.route.js";
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true    
}))
app.use("/api/v1/user", userRouter);

const PORT  =process.env.PORT || 3000; 
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Sever listen at port ${PORT}`);
})
 