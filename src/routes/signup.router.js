import { Router } from "express";
import  SignUpController  from "../controllers/signup.controller.js";

const SignUpRoutes = Router();

SignUpRoutes.post('/signup', SignUpAuthMiddleware, SignUpController);

export default SignUpRoutes;