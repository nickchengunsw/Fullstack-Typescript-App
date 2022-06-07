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

    it('should return 400 response on bad request', async () => {
        const res = await request(app).post('/orders');
        expect (res.statusCode).toEqual(400);
    });

    it('should return 200 response on a post to /orders', async () => {
        const res = await request(app)
            .post('/orders')
            .send({
                totalAmount: {
                    amount: '10',
                    currency: 'EUR'
                }
            });
        expect (res.statusCode).toEqual(200);
        expect (res.body).toMatchObject({message: 'Created order!'});
    });

    
});
