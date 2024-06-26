import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'

import productsRouter from './routes/products.routes.js'
import loginRouter from './routes/login.routes.js'
import SalesRouter from './routes/sales.routes.js'

const app = express()

// Define the system path.
const __dirname = dirname(fileURLToPath(import.meta.url))

// Settings
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares.
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static(join(__dirname, 'public')))

// Routes.
app.use('/', loginRouter)
app.use('/products', productsRouter)
app.use('/sales', SalesRouter)

export default app
