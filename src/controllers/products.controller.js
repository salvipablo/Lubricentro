import e from "express";
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

export const pageNewProduct = (_req, res) => {
  let dataPage = {
    dataStatic
  }

  res.render('newProduct', dataPage)
}

export const SaveProduct = async (req, res) => {
  try {
    const { description, brand, stock, priceWNIva } = req.body

    let newProduct = {
      id: 10,
      description: description,
      brand: brand,
      amount: stock,
      priceWNIva: priceWNIva
    }

    await ProductSchema.create(newProduct)

    res.status(201).json({ message: "Save register sucesfully" })
  } catch (error) {
    let messageError = ''

    if (!error.errors) messageError = error.message
    else messageError = error.errors[0].message

    res.status(500).json({ message: messageError })
  }
}