import mongoose from "mongoose";

export const connectdb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to the database: ${conn.connection.host}`)
    } catch (err){
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}