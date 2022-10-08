const { uuidGenerator } = require("../utils/functions")
const { Products } = require("../models/products.model")

const getAllProducts = () => Products.findAll()

const createProduct = (data) => Products.create({
  id: uuidGenerator(),
  ...data
})

const getById = (id) => Products.findOne({where: {id}})

const editProduct = (id, data) => Products.update(data, {where: {id}})

const deleteProduct = (id) => Products.destroy({where: {id}})

module.exports = { getAllProducts, createProduct, getById, editProduct, deleteProduct }