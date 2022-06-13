import { OrdersObject } from '../../models/orderObject.model';
import axios, { AxiosResponse } from 'axios';
import orderData from '../../localData/validOrder'
export default class ApiProvider {
    async order(orderObject: OrdersObject): Promise<AxiosResponse> {
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/orders',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            data: orderData
        };
        const response = await axios.request(options);
        return response
    }
}
