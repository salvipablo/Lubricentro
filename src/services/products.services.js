import { ProductSchema } from '../models/products.js'

export const DiscountStock = async (id, amountToDiscount) => {
  try {
    const updateProduct = await ProductSchema.increment({ amount: -amountToDiscount }, { where: { id } })

    if (!updateProduct) throw new Error('Stock could not be discounted')

    return 'Successfully discounted stock'
  } catch (error) {
    return error.message
  }
}
