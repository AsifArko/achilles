import express, {Request, Response} from 'express';
import {createProduct, listProducts} from "../controllers/products";

const productRouter = express.Router();

productRouter.post('/products', createProduct);
productRouter.get('/products', listProducts);

export default productRouter