import { Router } from "express";
import  SignUpController  from "../controllers/signup.controller.js";
import SignUpMiddleware from "../middlewares/signup.middlewares.js";

const SignUpRoutes = Router();

SignUpRoutes.post('/signup', SignUpMiddleware, SignUpController);

export default SignUpRoutes;