import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

try{
    const mongoClient = new MongoClient(process.env.MONGO_URI);
    await mongoClient.connect();
    const db = mongoClient.db("foxStore");
} catch(err){
    console.log(err);
}