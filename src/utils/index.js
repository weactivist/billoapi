const credentials = require('./credentials')
const create_billogram = require('./create-billogram')
const create_customer = require('./create-customer')

module.exports = {
  credentials: credentials.credentials,
  create_billogram: create_billogram.create_billogram,
  create_customer: create_customer.create_customer,
}

