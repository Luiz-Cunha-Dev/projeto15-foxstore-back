import db from "../database/db.js";
import { ObjectId } from "mongodb";

export async function GetProductsController(req, res){
    try{
        const productsList = await db.collection("products").find().toArray()

        res.status(200).send(productsList)
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}
