import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/db.js'

import productRoutes from './routes/product.route.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use('/products', productRoutes)

app.listen(process.env.PORT, () => {
    connectdb()
    console.log(`Server is running successfully at port ${process.env.PORT}`)
})
//eun9d4CSNKWiQQsD