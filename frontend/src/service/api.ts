import { OrdersObject } from '../models/orderObject.model';
import ApiProvider from './provider/apiProvider';

export default class Api {
    provider;
    constructor() {
        this.provider = new ApiProvider();
    }
    async createOrder(ordersObject: OrdersObject) {
        return this.provider.order(ordersObject);
    }

}