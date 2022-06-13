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

    it('should accept an ordersObject', async () => {
        const response = await provider.createOrder(validOrder);
        expect(response).toHaveProperty('token');
    })
})