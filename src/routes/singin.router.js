import { Router } from "express";
import SignInController from "../controllers/signin.controller";
import SignInMiddleware from "../middlewares/signin.middlewares";

const SignInRoutes = Router();

SignInRoutes.post('/signup', SignInMiddleware, SignInController);

export default SignInRoutes;