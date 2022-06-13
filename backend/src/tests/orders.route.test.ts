import request from 'supertest'
import {Express} from 'express-serve-static-core'
import ordersRoute  from '../routes/orders.route';
import {createServer} from '../utils/server'

let app: Express;
describe('The order route', () => {
    beforeEach(async () => {
        app = await createServer();
        jest.resetAllMocks();
        jest.setTimeout(10000);
    });
    it('should exist', async () => {
        expect(ordersRoute).toBeDefined();
    });

    it('should return 400 response on bad request with no data', async () => {
        expect(async () => {
            await request(app).post('/orders').then(response => {
                expect(response.status).toBe(400);
            })
        });
    });

    it('should return 400 response on a bad request with some data', async () => {
        const res = await request(app)
            .post('/orders')
            .send({
                totalAmount: {
                    amount: '10',
                    currency: 'EUR'
                }
            });
        expect (res.statusCode).toEqual(400);
    }, 20000);

    it('should return 400 response on a bad request with invalid json', async () => {
        const res = await request(app)
            .post('/orders')
            .send({
                totalAmount: {
                    amount: '10',
                    currency: 34
                }
            });
        expect (res.statusCode).toEqual(400);
    });

    it('should return a 200 response on valid body input', async () => {
        const res = await request(app)
            .post('/orders')
            .send({
                totalAmount: {
                    amount: '10',
                    currency: 'EUR'
                },
                consumer: {
                    givenNames: 'John',
                    surname: 'Doe',
                },
                shipping: {
                    countryCode: 'NL',
                    name: 'John Doe',
                    postCode: '1234AB',
                    line1: 'Street 1',
                },
                items: [{
                    gtin: '123456789',
                    quantity: 1,
                    price: {
                        amount: '10',
                        currency: 'EUR'
                    },
                    name: 'Item 1',
                    category: 'Category 1',
                    sku: '234'
                }],
                merchant: {
                    redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
                    redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url'
                },
            });
        expect (res.statusCode).toEqual(200);
    }, 20000);

    it('should return a 200 response on valid body input', async () => {
        const res = await request(app)
            .post('/orders')
            .send({
                totalAmount: {
                    amount: '10',
                    currency: 'EUR'
                },
                consumer: {
                    givenNames: 'John',
                    surname: 'Doe',
                },
                shipping: {
                    countryCode: 'NL',
                    name: 'John Doe',
                    postCode: '1234AB',
                    line1: 'Street 1',
                },
                items: [{
                    gtin: '123456789',
                    quantity: 1,
                    price: {
                        amount: '10',
                        currency: 'EUR'
                    },
                    name: 'Item 1',
                    category: 'Category 1',
                    sku: '234'
                }],
                merchant: {
                    redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
                    redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url'
                },
            });
            expect(res.body).toHaveProperty('token');
            expect(res.body).toHaveProperty('expires');
            expect(res.body).toHaveProperty('checkoutUrl');
    }, 20000);

});