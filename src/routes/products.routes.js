import { Router } from "express"

import { 
  GetProducts,
  SaveProduct
} 
from "../controllers/products.controller.js"

const productsRouter = Router()

productsRouter.get('/', GetProducts)

productsRouter.get('/newProduct', (_req, res) => {
  let dataPage = {
    tabTitle: "Lubricentro",
  }

  res.render('newProduct', dataPage)
})

productsRouter.post('/saveProduct', SaveProduct)

export default productsRouter;
