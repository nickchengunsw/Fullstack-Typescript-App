import { OrdersObject } from '../../models/orderObject.model';
import axios, { AxiosResponse } from 'axios';
export default class ApiProvider {
    async order(orderObject: OrdersObject): Promise<AxiosResponse> {
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/orders',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            data: orderObject
        };
        const response = await axios.request(options);
        return response
    }
}
