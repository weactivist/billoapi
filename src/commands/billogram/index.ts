import {Command, flags} from '@oclif/command'

export default class Billogram extends Command {
  static description = 'common billogram commands'

  static examples = [
    '$ billoapi billogram',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    this.log('--help')
  }
}
