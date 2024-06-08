import { DataTypes } from 'sequelize'

import { sequelize } from '../database/database.js'

export const ProductSchema = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING
  },
  brand: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.INTEGER
  },
  priceWNIva: {
    type: DataTypes.DOUBLE
  }
}, {
  timestamps: false
})
