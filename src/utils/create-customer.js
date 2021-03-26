const got = require('got')

async function create_customer(config) {
  return got.post(`${config.endpoint}/customer`, {
    responseType: 'json',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.username}:${config.password}`).toString('base64')}`,
    },
    json: {
      name: 'John Doe',
      company_type: 'business',
      org_no: '777777-7777',
      language: 'sv',
      contact: {
        phone: 700700700,
      },
      address: {
        street_address: 'Ejegatan',
        zipcode: '13311',
        city: 'Coolistan',
      },
    },
  })
}

module.exports.create_customer = create_customer
