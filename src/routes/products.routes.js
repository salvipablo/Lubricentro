import { Router } from "express"

const productsRouter = Router()

productsRouter.get('/', (_req, res) => {
  res.render('index', {
    tabTitle: 'First Website with EJS.', 
    mainTitle: 'Mi primer sitio web con EJS como motor de plantillas.'
  })
})

export default productsRouter;
