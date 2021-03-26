const got = require('got')

async function create_billogram(config, customerNumber) {
  return got.post(`${config.endpoint}/billogram`, {
    responseType: 'json',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.username}:${config.password}`).toString('base64')}`,
    },
    json: {
      customer: {
        customer_no: customerNumber,
      },
      items: [{
        price: 10,
        vat: 25,
        unit: 'unit',
        title: 'Kaffe',
        count: 1,
      }],
      invoice_fee: 20,
      due_days: 30,
      currency: 'SEK',
      pdf: {
        template: 'modern',
      },
    },
  })
}

module.exports.create_billogram = create_billogram
