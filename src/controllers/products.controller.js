import { ProductSchema } from "../models/products.js";

let dataStatic = {
  tabTitle: "Lubricentro",
  mainTitle: "Lubricentro Carlitos",
}

export const GetProducts = async (_req, res) => {
  try {
    const products = await ProductSchema.findAll()

    let dataPage = {
      dataStatic,
      products
    }

    res.render('index', dataPage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const SaveProduct = async(req, res) => {
  try {
    const { description, brand, stock, priceWNIva } = req.body

    let newProduct = {
      id: 7,
      description: description,
      brand: brand,
      amount: stock,
      priceWNIva: priceWNIva
    }

    ProductSchema.create(newProduct)

    res.status(201).json({ message: "Save register sucesfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}