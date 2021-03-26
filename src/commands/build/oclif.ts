import {Command, flags} from '@oclif/command'
import {exec} from 'child_process'
import cli from 'cli-ux'

export default class Oclif extends Command {
  static description = 'build oclif'

  static examples = [
    '$ billoapi build:oclif',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    cli.action.start('Building Oclif package')

    exec('oclif-dev pack:macos', (error, stdout) => {
      cli.action.stop()

      if (error) {
        this.error(error)
      }

      this.log(stdout)
    })
  }
}
