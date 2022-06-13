import twoHundredResponse from '../../localData/200Response.json';
import { OrdersObject } from '../../models/orderObject.model';
import ApiResponse from '../../types/apiResponse.type';

export default class MockApi {
    async order(orderObject: OrdersObject): Promise<ApiResponse> {
        return twoHundredResponse;
    }
}
