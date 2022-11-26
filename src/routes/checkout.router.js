import { Router } from "express";
import {CheckoutController, GetCheckoutController, PrintInScreen} from "../controllers/checkout.controller.js";

const CheckOutRouter = Router();

CheckOutRouter.post("/checkout", CheckoutController);
CheckOutRouter.get("/checkout", GetCheckoutController);
CheckOutRouter.get("/print", PrintInScreen);

export default CheckOutRouter; 
