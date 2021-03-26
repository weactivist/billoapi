import {Command, flags} from '@oclif/command'
const utils = require('../../utils')

export default class WhoAmI extends Command {
  static description = 'check who you are'

  static examples = [
    '$ billoapi whoami',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const {username, password, endpoint} = await utils.credentials(this)

    this.log('Username:', username)
    this.log('Password:', password)
    this.log('Endpoint:', endpoint)
  }
}
