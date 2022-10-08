const express = require("express")
const app = express()
const { port } = require("./config")
const routers = require("./products/products.routes")
const { db } = require("./utils/database")

db.authenticate().then(() => console.log('DB autentication succefully')).catch((err)=> console.error(err))

db.sync().then(() => console.log('Database synced:  ')).catch((err)=> console.error(err))
require("./models/products.model")

app.use(express.json())
app.use('/products', routers)

app.get('/', (req, res)=> {
  res.send('Hello')
})

app.listen(port, ()=> {
  console.log('Server runing in port:', port)
})