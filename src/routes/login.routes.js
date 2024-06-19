import { Router } from 'express'

import {
  Login,
  SaveUser,
  GetUsers
} from '../controllers/login.controller.js'

const loginRouter = Router()

const dataStatic = {
  tabTitle: 'Lubricentro',
  mainTitle: 'Lubricentro Carlitos'
}

loginRouter.get('/', (_req, res) => {
  const dataPage = {
    dataStatic
  }

  res.render('login', dataPage)
})

loginRouter.get('/users', GetUsers)

loginRouter.post('/login', Login)

loginRouter.post('/saveUser', SaveUser)

export default loginRouter
