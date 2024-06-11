import { Sequelize } from "sequelize"

import { 
  DB_DATABASE,
  DB_DIALECT,
  PATH_APP
} from '../config.js'

console.log(PATH_APP);

export const sequelize = new Sequelize(DB_DATABASE, "", "", {
  dialect: DB_DIALECT,
  storage: `${PATH_APP}/database/lubricentro.sqlite`
})
