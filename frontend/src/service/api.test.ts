import {setupServer} from 'msw/node'
import api from './api';
import validOrder from '../localData/validOrder';

let provider : api;
describe('The api', () => {

    beforeEach(async () => {
        provider = new api();
    })
    it('should exist', () => {
        expect(provider).toBeDefined();
    });

    it('should have a createOrder function', () => {
        expect(provider.createOrder).toBeDefined();
    });

    it('should accept a valid ordersObject', async () => {
        const response = await provider.createOrder(validOrder);
        expect(response.data).toHaveProperty('token');
        expect(response.data).toHaveProperty('expires');
        expect(response.data).toHaveProperty('checkoutUrl');
    })

    it('should accept an ordersObject', async () => {
        const response = await provider.createOrder(validOrder);
        expect(response.data).toHaveProperty('token');
        expect(response.data).toHaveProperty('expires');
        expect(response.data).toHaveProperty('checkoutUrl');
    })
})