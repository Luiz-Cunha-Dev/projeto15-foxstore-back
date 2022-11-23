import joi from "joi";

async function SignInMiddleware(req, res, next) {
  const {email, password} = req.body;
  
  const SignInAuth = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(6).max(20).required(),
  }); 

  const auth = SignInAuth.validate({name, email, password, checkpassword});
  if (auth.error) {
      res.status(400).send(auth.error.details[0].message);
      return;
  }
  next();
};

export default SignInMiddleware;