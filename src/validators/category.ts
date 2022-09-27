import {body} from "express-validator";

export const createCategoryValidator = [body('name').not().isEmpty().withMessage('name of category')];