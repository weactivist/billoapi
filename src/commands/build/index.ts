import {Command, flags} from '@oclif/command'

export default class Build extends Command {
  static description = 'common build commands'

  static examples = [
    '$ billoapi build',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    this.log('--help')
  }
}
