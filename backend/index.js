import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/db.js'

dotenv.config()
const app = express()

app.listen(process.env.PORT, () => {
    connectdb()
    console.log(`Server is running successfully at port ${process.env.PORT}`)
})
//eun9d4CSNKWiQQsD