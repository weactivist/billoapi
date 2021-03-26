billoapi
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/billoapi.svg)](https://npmjs.org/package/billoapi)
[![Downloads/week](https://img.shields.io/npm/dw/billoapi.svg)](https://npmjs.org/package/billoapi)
[![License](https://img.shields.io/npm/l/billoapi.svg)](https://github.com/weactivist/billoapi/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g billoapi
$ billoapi COMMAND
running command...
$ billoapi (-v|--version|version)
billoapi/0.0.0 darwin-x64 node-v10.15.0
$ billoapi --help [COMMAND]
USAGE
  $ billoapi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`billoapi hello [FILE]`](#billoapi-hello-file)
* [`billoapi help [COMMAND]`](#billoapi-help-command)

## `billoapi hello [FILE]`

describe the command here

```
USAGE
  $ billoapi hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ billoapi hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/hello.ts)_

## `billoapi help [COMMAND]`

display help for billoapi

```
USAGE
  $ billoapi help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
