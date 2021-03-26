import {Command, flags} from '@oclif/command'
import got from 'got'
const utils = require('../../utils')

export default class List extends Command {
  static description = 'fetch list of invoices'

  static examples = [
    '$ billoapi billogram:list',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'page', default: 1, hidden: false, parse: (input: string) => parseInt(input, 10)},
    {name: 'limit', default: 10, hidden: false, parse: (input: string) => parseInt(input, 10)},
  ]

  async run() {
    const {username, password, endpoint} = await utils.credentials(this)

    const {args} = this.parse(List)

    try {
      const {body} = await got(`${endpoint}/billogram`, {
        responseType: 'json',
        headers: {
          Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        },
        searchParams: {
          page: args.page,
          page_size: args.limit,
        },
      })
      this.log(JSON.stringify(body))
    } catch (error) {
      this.error(error.response.body)
    }
  }
}
