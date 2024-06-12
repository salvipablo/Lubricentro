import { Router } from "express"

const loginRouter = Router()

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

loginRouter.post('/login')

export default loginRouter
