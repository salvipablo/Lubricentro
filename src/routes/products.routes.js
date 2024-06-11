import { Router } from "express"

import { 
  GetProducts,
  pageNewProduct,
  SaveProduct
} 
from "../controllers/products.controller.js"

const productsRouter = Router()

productsRouter.get('/', GetProducts)

productsRouter.get('/newProduct', pageNewProduct)

productsRouter.post('/saveProduct', SaveProduct)

export default productsRouter;
