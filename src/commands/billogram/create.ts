import {Command, flags} from '@oclif/command'
import {credentials, create_billogram} from '../../utils'

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
    const config = await credentials(this)

    const {args} = this.parse(CreateBillogram)

    try {
      const {body} = await create_billogram(config, args.customerNumber)
      this.log('Created invoice with ID:', body.data.id)
    } catch (error) {
      this.error(error.response.body)
    }
  }
}
