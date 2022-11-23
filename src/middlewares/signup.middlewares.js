import joi from "joi";

async function SignUpMiddleware(req, res, next) {
  const {name, email, password, checkpassword} = req.body;
  
  const SchemaSignUp = joi.object({
      name: joi.string().min(2).max(50).required(),
      email: joi.string().email().required(),
      password: joi.string().min(6).max(20).required(),
      checkpassword: joi.ref('password'),
  })
  const validation = SchemaSignUp.validate({name, email, password, checkpassword});
  if (validation.error) {
      res.status(400).send(validation.error.details[0].message);
      return;
  }
  next();
};
a
export default SignUpMiddleware;