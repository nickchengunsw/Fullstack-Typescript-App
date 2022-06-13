import express from 'express'
import validateBody from '../utils/requestValidator';
import ordersRoute from './orders.route'

const router = express.Router();
router.use('/orders',validateBody(),  ordersRoute);

export default router;