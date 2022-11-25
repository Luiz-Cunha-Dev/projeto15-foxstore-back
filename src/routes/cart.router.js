import { Router } from "express";
import {cartController, getcartController, removeCartController} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.post("/cart" , cartController);

cartRouter.get("/cart", getcartController);

cartRouter.delete("/cart", removeCartController)

export default cartRouter; 
