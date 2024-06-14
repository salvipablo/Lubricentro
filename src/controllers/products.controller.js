import { ProductSchema } from "../models/products.js"

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
      id: 11,
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

export const PageModifyProduct = async (req, res) => {
  try {
    const { id  } = req.params

    const foundProduct = await ProductSchema.findOne({ where: { id } })

    if (!foundProduct) throw new Error('Product does not exist in the database')

    let dataPage = {
      dataStatic,
      foundProduct
    }

    res.render('modifyProduct', dataPage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const ModifyProduct = async (req, res) => {
  try {
    const { id, description, brand, stock, priceWNIva } = req.body

    const updateProduct = await ProductSchema.update(
      {
        description,
        brand,
        stock,
        priceWNIva
      },
      {
        where: {
          id: id
        },
      },
    );

    if (!updateProduct) throw new Error('Product does not exist in the database')

    res.status(201).json({ message: "Product modified successfully" })
  } catch (error) {
    let messageError = ''

    if (!error.errors) messageError = error.message
    else messageError = error.errors[0].message

    res.status(500).json({ message: messageError })
  }
}

export const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    await ProductSchema.destroy({
      where: {
        id: id,
      },
    });

    res.status(201).json({ message: 'Product deleted sucessfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}