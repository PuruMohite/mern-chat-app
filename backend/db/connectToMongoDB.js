import mongoose from "mongoose";
//DB contains multiple collections, each collection has a structure which is defined by model and each entry in collection is called document.

const connectToMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch(error){
        console.log("Error connecting to MongoDB", error.message)
    }
}

export default connectToMongoDB;