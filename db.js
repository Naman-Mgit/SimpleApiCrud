import mongoose from "mongoose";

export async function dbConnect() {
     try {
        await mongoose.connect('mongodb+srv://naman:UZxEKH7A29ozJMkp@nodeapi.kxn9eir.mongodb.net/')

        console.log('MongoDB Connected');
     } catch (error) {
        console.log("Error in connectiong database: ",error)
     }
} 