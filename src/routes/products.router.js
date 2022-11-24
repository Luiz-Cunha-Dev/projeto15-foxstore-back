import { Router } from "express";
import ProductsController from "../controllers/products.Controller.js";

const ProductsRoutes = Router();

ProductsRoutes.get('/products', ProductsController);

export default ProductsRoutes;