import { Router } from "express"

import { 
  GetProducts,
  pageNewProduct,
  SaveProduct,
  PageModifyProduct,
  ModifyProduct,
  DeleteProduct
} 
from "../controllers/products.controller.js"

const productsRouter = Router()

productsRouter.get('/', GetProducts)

productsRouter.get('/newProduct', pageNewProduct)
productsRouter.get('/modifyProduct/:id', PageModifyProduct)

productsRouter.post('/saveProduct', SaveProduct)
productsRouter.post('/modifyProduct/', ModifyProduct)

productsRouter.delete('/:id', DeleteProduct)

export default productsRouter
