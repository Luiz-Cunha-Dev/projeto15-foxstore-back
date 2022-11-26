import db from "../database/db.js";

async function cartController(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const { name , qtde } = req.body;

    try {

        const product = await db.collection("products").findOne({ name });
        const cart = await db.collection("cart").findOne( { name } );
        
         if (!product) {
            res.status(404).send("product does not exist");
        } 
        //se o produto já existe no carrinho, atualiza a quantidade
        else if (cart.name.includes( name )) {    
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].name === name) {
                    cart[i].qtde = qtde;
                    await db.collection("cart").updateOne( { name }, { $set: { qtde } } );
                    res.status(200).send("product updated");
                }
            }
        }
        else {
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
        }

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
    
}
export {
    cartController,
    getcartController,
    removeCartController
}

