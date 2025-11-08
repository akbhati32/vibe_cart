const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find().limit(20)
  res.json(products)
})

// simple endpoint to get one
router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id)
  if(!p) return res.status(404).json({error:'not found'})
  res.json(p)
})

module.exports = router
