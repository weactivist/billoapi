import {Command, flags} from '@oclif/command'
const utils = require('../../utils')

export default class CreateBillogram extends Command {
  static description = 'create a single invoice'

  static examples = [
    '$ billoapi billogram:create',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'customerNumber', required: true},
  ]

  async run() {
    const config = await utils.credentials(this)

    const {args} = this.parse(CreateBillogram)

    try {
      const {body} = await utils.create_billogram(config, args.customerNumber)
      this.log('Created invoice with ID:', body.data.id)
    } catch (error) {
      this.error(error.response.body)
    }
  }
}
