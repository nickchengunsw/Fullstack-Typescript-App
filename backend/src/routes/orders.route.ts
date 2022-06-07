import express, { NextFunction, Request, Response } from "express";
import { OrdersObject } from "../models/orderObject.model";
import { RequestBody } from "../types/ordersPostRequest";
import validateBody from "../utils/requestValidator";
import schema from "../../_schema";
const router = express.Router();

// add validation layer
function createOrder (req: RequestBody<OrdersObject>, res: Response, next: NextFunction){
    res.send({message: 'Created order!'});
    res.status(200);
}

export default createOrder;