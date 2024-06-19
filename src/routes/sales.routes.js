import { Router } from 'express'

import {
  GetSales,
  SaveSale
} from '../controllers/sales.controller.js'

const SalesRouter = Router()

SalesRouter.get('/', GetSales)

SalesRouter.post('/', SaveSale)

export default SalesRouter
