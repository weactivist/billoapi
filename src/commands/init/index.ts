import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
const path = require('path')
const fs = require('fs-extra')

export default class Init extends Command {
  static description = 'initialize and store API credentials'

  static examples = [
    '$ billoapi init',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const config = path.join(this.config.configDir, 'config.json')

    try {
      const identifier = await cli.prompt('Identifier', {default: 'default'})
      const endpoint = await cli.prompt('Endpoint', {required: false, default: 'http://localhost:10000/api/v2'})
      const username = await cli.prompt('Username')
      const password = await cli.prompt('Password', {type: 'mask'})

      await fs.ensureDir(this.config.configDir)

      const existing = await fs.readJson(config)

      let newCredentials = {
        [identifier]: {
          username: username,
          password: password,
          endpoint: endpoint,
        },
      }

      if (typeof existing === 'object') {
        newCredentials = Object.assign(existing, newCredentials)
      }

      await fs.writeJson(config, newCredentials)

      this.log(JSON.stringify({
        [identifier]: {
          username: username,
          password: password,
          endpoint: endpoint,
        },
      }))
    } catch (error) {
      this.error(error)
    }
  }
}
