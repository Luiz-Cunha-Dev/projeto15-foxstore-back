import db from '../database/db.js';
import bcrypt from 'bcrypt';

async function SignInController(req, res) {
    const { email, password } = req.body;
    try {
        const userdata = await db.collection("users").findOne({email});
        if(userdata){
            if(bcrypt.compareSync(password, userdata.password)){
                const { _id } = userdata;
                const userToken = await db.collection("keys").findOne({_id});
                const userlogindata = {name: userdata.name, token: userToken.token}
                res.status(201).send(userlogindata);
            } 
        }else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).send("Erro on server");
    }
}

export default SignInController;