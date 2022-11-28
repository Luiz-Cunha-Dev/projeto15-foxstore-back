import { Router } from "express";
import { GetProductsController } from "../controllers/products.Controller.js";
import { PutProductsController } from "../controllers/products.Controller.js";
import TokenValidation from "../middlewares/tokenValidation.js";
import idValidation from "../middlewares/idValidation.js";

const ProductsRoutes = Router();

ProductsRoutes.get('/products', GetProductsController);

ProductsRoutes.put('/products/:id', TokenValidation, idValidation, PutProductsController);

export default ProductsRoutes;