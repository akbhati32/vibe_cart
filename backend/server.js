require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/products')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shoppyglobe'

mongoose.connect(MONGODB_URI).then(()=> {
  console.log('Connected to MongoDB')
  app.listen(PORT, ()=> console.log('Server listening on', PORT))
}).catch(err=> {
  console.error('DB connection error', err)
  app.listen(PORT, ()=> console.log('Server listening (no DB) on', PORT))
})
