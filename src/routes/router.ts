import {Express} from "express";

import productRouter from "./products";
import categoryRouter from "./categories";

export const initializeRoutes = (app: Express) => {
  app.use('/api', productRouter)
  app.use('/api', categoryRouter)
}