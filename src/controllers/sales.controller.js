import { SaleSchema } from '../models/sale.model.js'
import { DiscountStock, IncreaseStock } from '../services/products.services.js'

const dataStatic = {
  tabTitle: 'Lubricentro',
  mainTitle: 'Ventas'
}

export const GetSales = async (_req, res) => {
  try {
    const sales = await SaleSchema.findAll()

    const dataPage = {
      dataStatic,
      sales
    }

    res.render('sales', dataPage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const SaveSale = async (req, res) => {
  try {
    const { idProduct, descriptionProduct, amount, costPrice, endPriceSale } = req.body

    const priceWIVACalculate = (costPrice + (costPrice * 21 / 100)) * amount
    const revenueCalculate = endPriceSale - priceWIVACalculate

    const newSale = {
      idProduct,
      description: descriptionProduct,
      amountSales: amount,
      priceWIVA: priceWIVACalculate,
      endPrice: endPriceSale,
      revenue: revenueCalculate
    }

    await SaleSchema.create(newSale)

    DiscountStock(idProduct, amount)

    res.status(201).json({ message: 'Sale successfully completed' })
  } catch (error) {
    let messageError = ''

    if (!error.errors) messageError = error.message
    else messageError = error.errors[0].message

    res.status(500).json({ message: messageError })
  }
}

export const DeleteSale = async (req, res) => {
  try {
    const { id } = req.params

    const getSale = await SaleSchema.findByPk(id)

    if (!getSale) throw new Error('Sale not found')

    const amountIncrease = getSale.amountSales
    const idProduct = getSale.idProduct

    console.log(`ID de producto: ${idProduct}`)
    console.log(`Cantidad a aumentar: ${amountIncrease}`)

    const updateIncrease = await IncreaseStock(idProduct, amountIncrease)

    if (updateIncrease === 'Stock could not be Increase') throw new Error('Error when increasing stock')

    await SaleSchema.destroy({
      where: {
        id
      }
    })

    res.status(201).json({ message: 'Sale deleted sucessfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
