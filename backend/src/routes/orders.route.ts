import { Response } from 'express';
import { OrdersObject } from '../models/orderObject.model';
import { RequestBody } from '../types/ordersPostRequest';
import axios from 'axios';

async function createOrder (req: RequestBody<OrdersObject>, res: Response){
    const order = {
        ...req.body,
        product: 'pay-in-3'
    }
    const options = {
        method: 'POST',
        url: 'https://integration.api.scalapay.com/v2/orders',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer qhtfs87hjnc12kkos`
        },
        data: order
    };
    axios.request(options).then(response => {
        res.status(200).json(response.data);
      }).catch(error => {
        return res.status(error.response.status).json([
            {error: error.response.data},
        ])
      });
}

export default createOrder;