import {Command, flags} from '@oclif/command'
import {credentials} from '../../utils'

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
    const {username, password, endpoint} = await credentials(this)

    this.log('Username:', username)
    this.log('Password:', password)
    this.log('Endpoint:', endpoint)
  }
}
