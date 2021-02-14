import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getMyorders,
    getOrderById,
    getOrders,
    updateOrderToDeliver,
    updateOrderToPaid,
} from '../controllers/orderController.js'

import { admin, protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyorders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, updateOrderToDeliver)

export default router
