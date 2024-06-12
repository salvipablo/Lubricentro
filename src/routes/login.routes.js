import { Router } from "express"

const loginRouter = Router()

import {
  Login,
  SaveUser,
  GetUsers
} 
from "../controllers/login.controller.js"

let dataStatic = {
  tabTitle: "Lubricentro",
  mainTitle: "Lubricentro Carlitos",
}

loginRouter.get('/', (_req, res) => {
  let dataPage = {
    dataStatic
  }

  res.render('login', dataPage)
})

loginRouter.get('/users', GetUsers)

loginRouter.post('/login', Login)

loginRouter.post('/saveUser', SaveUser)

export default loginRouter
