const pcs = require("./products.controllers")

const getAllProducts = async (req, res) => {
  try {
    const products = await pcs.getAllProducts()
    res.status(200).json(products)

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const newProduct = async (req, res) => {
  try {
    const { name, category, price, isAvailable } = req.body
    if(!name || !category || !price || !isAvailable) res.status(400).json({message: 'a property is missing or its value is not defined.'})
    const product = await pcs.createProduct({name, category, price, isAvailable})
    res.status(201).json(product)

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await pcs.getById(id)
    res.status(200).json(product)

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await pcs.editProduct(id, req.body)
    res.status(200).json(product)

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params, product = await pcs.deleteProduct(id)
    res.status(202).json(product)
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

module.exports = { getAllProducts, newProduct, getProduct, updateProduct, deleteProduct }