import express from 'express'
const app = express.Router()
import {
    getProducts,
    getProductById,
} from '../controllers/productController.js'

app.route('/').get(getProducts)
app.route('/:id').get(getProductById)

export default app
