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

export async function PutProductsController(req, res){
    const id = req.id
    
    try{
        const product = await db.collection("products").findOne({_id: ObjectId(id)})

        product.inventory = product.inventory - 1;
        
        await db.collection("products").updateOne({_id: ObjectId(id)}, {$set: product})

        res.status(201).send("Atualizado com sucesso!");
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}
