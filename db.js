import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const st=process.env.MONGODB_URL || "";
export async function dbConnect() {
     try {
        await mongoose.connect(st)

        console.log('MongoDB Connected');
     } catch (error) {
        console.log("Error in connectiong database: ",error)
     }
} 