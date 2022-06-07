import express from 'express'
import validateBody from '../utils/requestValidator';
import ordersRoute from './orders.route'
import orderSchema from '../../_schema';

const router = express.Router();
router.use(express.json());
router.use(validateBody(orderSchema.OrdersObject));
router.use('/orders', ordersRoute);

export default router;