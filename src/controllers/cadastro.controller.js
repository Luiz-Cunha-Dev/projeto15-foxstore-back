import db from "../database/db.js";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

async function CadastroController(req, res) {
    const { nome, email, senha, confirmarsenha } = req.body;
    const codigoHash = bcrypt.hashSync(senha,10);
    const confirmarCodigoHash = bcrypt.hashSync(confirmarsenha, 10);
    const signUp = {nome,email,senha: codigoHash,confirmarsenha: confirmarCodigoHash,}
    try {
        const usuarioExistente = await db.collection("usuarios").findOne({email});
        if(usuarioExistente) {
            res.status(400).send("Já existe um usuário cadastrado com esse email");
            return;
        }
        await db.collection("usuarios").insertOne(signUp); 
        const token = uuid();
        const dadosDoUsuario = await db.collection("usuarios").findOne({email});
        const { _id } = dadosDoUsuario;
        const chave = {_id,token}
        await db.collection("chave").insertOne(chave); 
        res.status(201).send('Cadastro realizado com sucesso');
    } 
    catch (err) {
        res.status(500).send('Erro ao cadastrar usuário');
    }
}

export default CadastroController;