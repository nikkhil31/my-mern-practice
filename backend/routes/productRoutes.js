import express from 'express'
const app = express.Router()
import {
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview,
} from '../controllers/productController.js'

import { admin, protect } from '../middleware/authMiddleware.js'

app.route('/').get(getProducts).post(protect, admin, createProduct)
app.route('/:id/reviews/').post(protect, createProductReview)
app.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

export default app
