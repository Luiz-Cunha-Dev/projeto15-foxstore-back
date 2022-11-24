import { Router } from "express";
import  SignUpController  from "../controllers/signup.controller.js";
import SignInMiddleware from "../middlewares/signup.middlewares.js";

const SignUpRoutes = Router();

SignUpRoutes.post('/signup', SignInMiddleware, SignUpController);

export default SignUpRoutes;