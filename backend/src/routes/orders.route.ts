import { Response } from 'express';
import { OrdersObject } from '../models/orderObject.model';
import { RequestBody } from '../types/ordersPostRequest';
import { request } from '../controller/controller'

async function createOrder (req: RequestBody<OrdersObject>, res: Response){
    try {
        const orderObject = req.body;
        const response = await request(orderObject)
        res.status(200).json(response.data);
    } catch (error : any) {
        return res.status(error.response.status).json([
            {error: error.response.data},
        ])
    }
}

export default createOrder;