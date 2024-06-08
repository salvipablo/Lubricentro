import { Sequelize } from "sequelize"

import { 
  DB_DATABASE,
  DB_DIALECT,
} from '../config.js'

export const sequelize = new Sequelize(DB_DATABASE, "", "", {
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: "C:/Users/Pablo/Documents/Programming/Projects/Lubricentro/src/database/lubricentro.sqlite"
})
