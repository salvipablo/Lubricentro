import { Router } from 'express'

import {
  GetSales,
  SaveSale,
  DeleteSale
} from '../controllers/sales.controller.js'

const SalesRouter = Router()

SalesRouter.get('/', GetSales)

SalesRouter.post('/', SaveSale)

SalesRouter.delete('/:id', DeleteSale)

export default SalesRouter
