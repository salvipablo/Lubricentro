import { SaleSchema } from '../models/sale.js'

const dataStatic = {
  tabTitle: 'Lubricentro',
  mainTitle: 'Lubricentro Carlitos'
}

export const GetSales = async (_req, res) => {
  try {
    const sales = await SaleSchema.findAll()

    const dataPage = {
      dataStatic,
      sales
    }

    console.log(dataPage)

    res.render('sales', dataPage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const SaveSale = async (req, res) => {
  try {
    const { descriptionProduct, amount, costPrice, endPriceSale } = req.body

    const priceWIVACalculate = (costPrice + (costPrice * 21 / 100)) * amount
    const endPriceCalculate = endPriceSale
    const revenueCalculate = endPriceCalculate - priceWIVACalculate

    const newSale = {
      description: descriptionProduct,
      amountSales: amount,
      priceWIVA: priceWIVACalculate,
      endPrice: endPriceCalculate,
      revenue: revenueCalculate
    }

    await SaleSchema.create(newSale)

    res.status(201).json({ message: 'Save register sucesfully' })
  } catch (error) {
    let messageError = ''

    if (!error.errors) messageError = error.message
    else messageError = error.errors[0].message

    res.status(500).json({ message: messageError })
  }
}
