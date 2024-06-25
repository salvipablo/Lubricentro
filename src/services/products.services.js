import { ProductSchema } from '../models/products.model.js'

export const DiscountStock = async (id, amountToDiscount) => {
  try {
    const updateProduct = await ProductSchema.increment({ amount: -amountToDiscount }, { where: { id } })

    if (!updateProduct) throw new Error('Stock could not be discounted')

    return 'Successfully discounted stock'
  } catch (error) {
    return error.message
  }
}

export const IncreaseStock = async (id, amountToIncrease) => {
  try {
    const updateProduct = await ProductSchema.increment({ amount: amountToIncrease }, { where: { id } })

    if (!updateProduct) throw new Error('Stock could not be Increase')

    return 'Successfully discounted stock'
  } catch (error) {
    return error.message
  }
}
