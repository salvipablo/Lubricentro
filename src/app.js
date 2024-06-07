import express from "express"

import productsRouter from "./routes/products.routes.js";

const app = express();

// Middlewares.
app.use(express.json())

// Routes.
app.use("/products", productsRouter);

export default app
