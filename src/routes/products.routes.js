import { Router } from "express"

const productsRouter = Router()

let products = {
  tabTitle: "Lubricentro",
  mainTitle: "Lubricentro Carlitos",
  products: [
    {id: 1, description: "Revividor alfombras y gomas negro 480 CM FULL CAR", brand:"FULL CAR", amount: 7, priceWNIva: 1435 },
    {id: 2, description: "Aditivo para Aceite NO SMOKE * 400 mL", brand:"BARDAHL", amount: 3, priceWNIva: 3225 },
    {id: 3, description: "Agua Destilada", brand:"VEP", amount: 10, priceWNIva: 1445 },
    {id: 4, description: "Aromatizador Airpur Sport", brand:"FULL CAR", amount: 59, priceWNIva: 688 }
  ]
}

productsRouter.get('/', (_req, res) => {
  res.render('index', products)
})

export default productsRouter;
