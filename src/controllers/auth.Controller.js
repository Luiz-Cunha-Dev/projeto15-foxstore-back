

export async function signUp(req, res){

    try{


    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function signIn(req, res){
    const {email, password} = req.body;

    try{


    } catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}
