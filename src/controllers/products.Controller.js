import db from "../database/db.js";

async function ProductsController(req, res){
    try{
        const productsList = await db.collection("products").find().toArray()

        res.status(200).send(productsList)
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default ProductsController