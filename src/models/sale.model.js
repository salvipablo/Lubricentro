import { DataTypes } from 'sequelize'

import { sequelize } from '../database/database.js'

export const SaleSchema = sequelize.define('sales', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idProduct: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  amountSales: {
    type: DataTypes.INTEGER
  },
  priceWIVA: {
    type: DataTypes.DOUBLE
  },
  endPrice: {
    type: DataTypes.DOUBLE
  },
  revenue: {
    type: DataTypes.DOUBLE
  }
}, {
  timestamps: false
})
