export default async function idValidation(req, res, next){
    const {id} = req.params;

    if(!id){
        res.status(400).send("Id não informado!");
        return;
    }

   req.id = id;

    next();
}