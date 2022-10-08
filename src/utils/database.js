const { Sequelize } = require("sequelize")
const { nameDB, hostDB, paswordDB, usernameDB } = require("../config")

const db = new Sequelize({
  dialect: 'postgres',
  host: hostDB,
  username: usernameDB,
  password: paswordDB,
  database: nameDB
})

module.exports = { db }