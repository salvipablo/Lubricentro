import { ProductSchema } from "../models/products.js";

export const GetProducts = async (_req, res) => {
  try {
    const products = await ProductSchema.findAll()

    let dataPage = {
      tabTitle: "Lubricentro",
      mainTitle: "Lubricentro Carlitos",
      products
    }

    res.render('index', dataPage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const SaveProduct = async(_req, res) => {
  try {
    let newProduct = {
      id: 1,
      description: "Acite W40 Plus",
      brand: "laMarca",
      amount: 5,
      priceWNIva: 2840
    }
  
    ProductSchema.create(newProduct)

    res.status(201).json({ message: "Save register sucesfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}