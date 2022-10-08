const router = require("express").Router()
const psvs = require("./products.services")

router.get('/', psvs.getAllProducts)

router.post('/', psvs.newProduct)

router.get('/:id', psvs.getProduct)

router.patch('/:id', psvs.updateProduct)

router.delete('/:id', psvs.deleteProduct)

module.exports = router