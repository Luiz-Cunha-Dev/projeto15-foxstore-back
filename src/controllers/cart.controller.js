import { ObjectId } from "mongodb";
import db from "../database/db.js";

async function cartController(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const { name , qtde } = req.body;

    try {

        const product = await db.collection("products").findOne({ name });
        
         if (!product) {
            res.status(404).send("product does not exist");
        } 

        await db.collection("cart").insertOne({
            token,
            name: product.name,
            description: product.description,
            image: product.image,
            value: product.value,
            categorie: product.categorie,
            inventory: product.inventory,
            qtde
        });

        res.sendStatus(201);

    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }

}

async function getcartController (req, res){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    try {   
        const cartList = await db.collection("cart").find({token}).toArray();

        res.status(200).send(cartList);
        
    } catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

async function removeCartController (req, res){
  
    const {id} = req.body;
    
    try{
       /*  await db.collection("cart").deleteOne({ _id: ObjectId(productId._id) })
         res.status(200).send({ message: "Documento apagado com sucesso!" }); */
       const teste =  await db.collection("cart").findOne({ _id: id })
        res.send(teste)
    } catch (err){
        
        res.status(401).send(err)
    }
}
export {
    cartController,
    getcartController,
    removeCartController
}

