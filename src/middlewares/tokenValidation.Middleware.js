
 export default async function tokenValidation(req, res, next){
    const {authorization} = req.headers;
    const token = authorization.replace("Bearer ", "");

    if(!token){
        res.sendStatus(400);
        return;
    }

    try{

        
    }catch(err){
        res.status(500);
        console.log(err);
    }

    next();
};