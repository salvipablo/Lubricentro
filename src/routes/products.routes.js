import { Router } from "express"

const productsRouter = Router()

productsRouter.get('/', (_req, res) => {
  res.send("Products")
})

export default productsRouter;
