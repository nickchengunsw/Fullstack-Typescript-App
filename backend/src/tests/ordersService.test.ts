import { OrdersService } from "../services/ordersService";

describe('The order service', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should exist', async () => {
        const ordersService = new OrdersService();
        expect(ordersService).toBeDefined();
    });

    
});
