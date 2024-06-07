import express from "express"
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import morgan from "morgan";

import productsRouter from "./routes/products.routes.js";

const app = express();

// Define the system path.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares.
app.use(express.json())
app.use(morgan('tiny'))

// Routes.
app.use("/products", productsRouter);

export default app
