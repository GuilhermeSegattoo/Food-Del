import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://segattoguilherme:28052004@cluster0.y9nql.mongodb.net/food-del').then(()=>console.log("DB Conectado"))
}
