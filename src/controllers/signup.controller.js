//modules
import db from "../database/db.js";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

//controller
async function SignUpController(req, res) {
    const { name, email, password, checkpasword } = req.body;
    const hashcode = bcrypt.hashSync(password,10);
    const checkhashcode = bcrypt.hashSync(checkpasword, 10);
    const signUp = {name, email, password: hashcode, checkpasword: checkhashcode,}
    try {
        const userexists = await db.collection("users").findOne({email});
        if(!userexists) {
            await db.collection("users").insertOne(signUp); 
            const token = uuid();
            const userInformation = await db.collection("users").findOne({email});
            const { _id } = userInformation;
            const keys = {_id,token}
            await db.collection("keys").insertOne(keys); 
            res.status(201).send("User created sucessfully");   
        }else{
            res.status(400).send("Email registrado com sucesso!");
            return;
        }
        
    } catch (err) {
        res.status(500).send('Erro');
    }
}

export default SignUpController;