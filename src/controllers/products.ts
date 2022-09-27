import {Request, Response} from "express";
import Product from "../schemas/product";
import Status from "../enums/status";
import Message from "../enums/message";
import mongoose from "mongoose";
import ProductSerializer from "../serializer/productSerializer";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const data = new Product({
      name: payload.name,
      cost: payload.cost,
      mrp: payload.mrp,
      stock: payload.stock,
      category: new mongoose.Types.ObjectId(payload.category),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })

    await data.save();

    res.status(Status.CREATED).send(Message.CREATED);
  } catch (e) {
    throw e
  }
}

export const listProducts = async (req: Request, res: Response) => {
  const serializer: ProductSerializer = new ProductSerializer();
  try {
    const data = await Product.aggregate([
      {
        "$lookup": {
          "from": "categories",
          "localField": "category",
          "foreignField": "_id",
          "pipeline": [ {$project: {name: 1} } ],
          "as": "category"
        }
      },
      {
        $unwind: {
          path: "$category",
          preserveNullAndEmptyArrays: false
        }
      },
      {
        $set: {
          category: "$category.name"
        }
      }
    ])
    res.status(Status.OK).send(serializer.serializeProducts(data))
  } catch (e) {
    throw e
  }
}