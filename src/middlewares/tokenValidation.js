
export default async function TokenValidation(req, res, next){
    const {authorization} = req.headers;
    const token = authorization.replace("Bearer ", "");

    if(!token){
        res.status(400).send("Token não informado!");
        return;
    }

    req.token = token;
    next();
}