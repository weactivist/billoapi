const path = require('path')
const fs = require('fs-extra')
// eslint-disable-next-line node/no-extraneous-require
const inquirer = require('inquirer')

async function credentials(ctx) {
  const config = path.join(ctx.config.configDir, 'config.json')

  try {
    if (!(await fs.pathExists(config))) {
      ctx.warn('Credentials not found. Run the command $ billoapi init')
      ctx.exit(0)
    }

    const identifiers = await fs.readJson(config)

    if (!identifiers) {
      ctx.warn('Credentials not found. Run the command $ billoapi init')
      ctx.exit(0)
    }

    const choices = Object.keys(identifiers).sort((a, b) => {
      return a === 'default' ? -1 : b === 'default' ? 1 : 0
    })

    const responses = await inquirer.prompt([{
      name: 'credential',
      message: 'select credentials',
      type: 'list',
      choices: choices,
    }])

    return identifiers[responses.credential]
  } catch (error) {
    ctx.error(error)
  }
}

module.exports.credentials = credentials
