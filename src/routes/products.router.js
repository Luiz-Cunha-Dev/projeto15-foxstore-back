import { Router } from "express";
import { GetProductsController } from "../controllers/products.Controller.js";

const ProductsRoutes = Router();

ProductsRoutes.get('/products', GetProductsController);

export default ProductsRoutes;