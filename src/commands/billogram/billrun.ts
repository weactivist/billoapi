import {Command, flags} from '@oclif/command'
const utils = require('../../utils')

export default class Billrun extends Command {
  static description = 'Simulate a billrun. A new recipient will be created that is assigned all the invoices created.'

  static examples = [
    '$ billoapi billogram:billrun',
  ]

  static flags = {
    limit: flags.string({default: '10', description: 'Limit the number of invoices created.'}),
    'chunk-size': flags.string({default: '10', description: 'This splits the number of invoices into chunks where each chunk has its own recipient. Example: A limit of 10 invoices with a chunk size of 5 would create two new recipients having 5 invoices each.'}),
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const {flags} = this.parse(Billrun)

    const config = await utils.credentials(this)

    const chunkSize = parseInt(flags['chunk-size'], 10)

    for (let i = 0, j = parseInt(flags.limit, 10); i < j; i += chunkSize) {
      /* eslint-disable no-await-in-loop */
      const {body} = await utils.create_customer(config)
      const customerNumber = body.data.customer_no
      this.log('Created customer with customer number:', body.data.customer_no)

      const promises = [...new Array(chunkSize).keys()].map(async () => {
        const {body} = await utils.create_billogram(config, customerNumber)
        // this.log('Created invoice with ID:', body.data.id)
      })

      await Promise.all(promises)
    }
  }
}
