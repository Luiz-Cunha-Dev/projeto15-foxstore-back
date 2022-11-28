import { Router } from "express";
import {CheckoutController} from "../controllers/checkout.controller.js";

const CheckOutRouter = Router();

CheckOutRouter.post("/checkout", CheckoutController);

export default CheckOutRouter; 
