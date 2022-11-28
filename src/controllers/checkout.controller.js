import db from "../database/db.js";

async function CheckoutController(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    let total = 0;

    try {
        const cart = await db.collection("cart").findOne({ token });
        const product = await db.collection("products").find().toArray()

        if (!cart) {
            res.status(404).send("your cart is empty");
        }
       for(let i = 0; i < cart.length; i++){
              for(let j = 0; j < product.length; j++){
                let productInventory = product[j].inventory;
                    if(cart[i].name === product[j].name){
                        productInventory -= cart[i].qtde;
                        if(productInventory > 0){
                            await db.collection("products").updateOne({name: product[j].name}, {$set: {inventory: productInventory}});
                            
                        }
                    }total += cart[i].value * cart[i].qtde;
                }
            }
        await db.collection("orders").insertOne({ cart });
        await db.collection("cart").deleteMany({ });
        res.sendStatus(200).send("Order placed successfully");
    }
    catch (err) {
        console.log(err)
        res.status(401).send("error");
    }
};


async function GetCheckoutController(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    try {
        //find the last order in the database and return it
        const order = await db.collection("orders").find( { token } ).sort({$natural:-1}).limit(1).toArray();
        res.status(200).send(orderList);
    } catch (err) {
        console.log(err);
        res.sendStatus(500).res("DEU RUIM");
    }
}

export { CheckoutController, GetCheckoutController };