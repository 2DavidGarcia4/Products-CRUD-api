require("dotenv").config()

const PV = process.env
const port = PV.port
const nameDB = PV.DB_NAME
const hostDB = PV.DB_HOST
const paswordDB = PV.DB_PASSWORD
const usernameDB = PV.DB_USERNAME

module.exports = {port, nameDB, hostDB, paswordDB, usernameDB  }