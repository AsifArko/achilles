import express from 'express';
import {createCategory, listCategories} from "../controllers/categories";
import {createCategoryValidator} from "../validators/category";

const categoryRouter = express.Router();

categoryRouter.post('/categories', createCategoryValidator, createCategory);
categoryRouter.get('/categories', createCategoryValidator, listCategories);


export default categoryRouter