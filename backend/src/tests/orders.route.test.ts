import request from 'supertest'
import {Express} from 'express-serve-static-core'
import ordersRoute  from "../routes/orders.route";
import {createServer} from '../utils/server'

let app: Express;
describe('The order route', () => {
    beforeEach(async () => {
        app = await createServer();
        jest.resetAllMocks();
    });
    it('should exist', async () => {
        expect(ordersRoute).toBeDefined();
    });

    it('should return 200 response on a post to /orders', async () => {
        request(app)
            .post('/orders')
            .expect(200);
    });   

    
});
