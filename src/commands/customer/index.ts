import {Command, flags} from '@oclif/command'

export default class Customer extends Command {
  static description = 'common customer commands'

  static examples = [
    '$ billoapi customer',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    this.log('--help')
  }
}
