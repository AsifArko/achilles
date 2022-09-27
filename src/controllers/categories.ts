import {Request, Response} from "express";
import Status from "../enums/status";
import Message from "../enums/message";

import Category from "../schemas/category";
import Serializer from "../serializer/serializer";

export const createCategory = async (req: Request, res: Response) => {
  const payload = req.body;
  try {
    const data = new Category(payload)
    await data.save();
    res.status(Status.CREATED).send(Message.CREATED);
  } catch (e) {
    throw e
  }
}

export const listCategories = async (req: Request, res: Response) => {
  const serializer: Serializer = new Serializer();
  try {
    const data = await Category.find()
    res.status(Status.OK).send(serializer.serializeArray(data))
  } catch (e) {
    throw e
  }
}