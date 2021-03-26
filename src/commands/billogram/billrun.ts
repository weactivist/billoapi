import {Command, flags} from '@oclif/command'
import {credentials, create_billogram, create_customer} from '../../utils'

export default class Billrun extends Command {
  static description = 'build oclif'

  static examples = [
    '$ billoapi billogram:billrun',
  ]

  static flags = {
    limit: flags.string({default: '10'}),
    chunk: flags.string({default: '100'}),
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const {flags} = this.parse(Billrun)

    const config = await credentials(this)

    const chunk = parseInt(flags.chunk, 10)

    for (let i = 0, j = parseInt(flags.limit, 10); i < j; i += chunk) {
      /* eslint-disable no-await-in-loop */
      const {body} = await create_customer(config)
      const customerNumber = body.data.customer_no
      this.log('Created customer with customer number:', body.data.customer_no)

      const promises = [...new Array(chunk).keys()].map(async () => {
        const {body} = await create_billogram(config, customerNumber)
        this.log('Created invoice with ID:', body.data.id)
      })

      await Promise.all(promises)
    }
  }
}
