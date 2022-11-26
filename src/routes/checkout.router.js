import { Router } from "express";
import {CheckoutController, GetCheckoutController} from "../controllers/checkout.controller.js";

const CheckOutRouter = Router();

CheckOutRouter.post("/checkout", CheckoutController);
CheckOutRouter.get("/checkout", GetCheckoutController);

export default CheckOutRouter; 
