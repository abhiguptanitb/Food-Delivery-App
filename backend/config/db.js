import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://abhiguptaofficial30:fooddelivery@cluster0.roxrr.mongodb.net/food-delivery").then(()=>console.log('DB Connected'));
}