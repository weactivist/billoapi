import {Command, flags} from '@oclif/command'
import {credentials, create_customer} from '../../utils'

export default class Create extends Command {
  static description = 'create a single customer'

  static examples = [
    '$ billoapi customer:create',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const config = await credentials(this)

    try {
      const {body} = await create_customer(config)
      this.log('Created customer with customer number:', body.data.customer_no)
      return body.data.customer_no
    } catch (error) {
      this.error(error.response.body)
    }
  }
}
