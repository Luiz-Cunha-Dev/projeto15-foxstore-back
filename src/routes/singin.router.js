import { Router } from "express";
import SignInController from "../controllers/signin.controller.js";
import SignInMiddleware from "../middlewares/signin.middlewares.js";

const SignInRoutes = Router();

SignInRoutes.post('/signin', SignInMiddleware, SignInController);

export default SignInRoutes;