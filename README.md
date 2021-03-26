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
* [`billoapi billogram`](#billoapi-billogram)
* [`billoapi billogram:billrun`](#billoapi-billogrambillrun)
* [`billoapi billogram:create CUSTOMERNUMBER`](#billoapi-billogramcreate-customernumber)
* [`billoapi billogram:list [PAGE] [LIMIT]`](#billoapi-billogramlist-page-limit)
* [`billoapi build`](#billoapi-build)
* [`billoapi build:oclif`](#billoapi-buildoclif)
* [`billoapi customer`](#billoapi-customer)
* [`billoapi customer:create`](#billoapi-customercreate)
* [`billoapi help [COMMAND]`](#billoapi-help-command)
* [`billoapi init`](#billoapi-init)
* [`billoapi whoami`](#billoapi-whoami)

## `billoapi billogram`

common billogram commands

```
USAGE
  $ billoapi billogram

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi billogram
```

_See code: [src/commands/billogram/index.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/billogram/index.ts)_

## `billoapi billogram:billrun`

build oclif

```
USAGE
  $ billoapi billogram:billrun

OPTIONS
  -h, --help     show CLI help
  --chunk=chunk  [default: 100]
  --limit=limit  [default: 10]

EXAMPLE
  $ billoapi billogram:billrun
```

_See code: [src/commands/billogram/billrun.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/billogram/billrun.ts)_

## `billoapi billogram:create CUSTOMERNUMBER`

create a single invoice

```
USAGE
  $ billoapi billogram:create CUSTOMERNUMBER

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi billogram:create
```

_See code: [src/commands/billogram/create.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/billogram/create.ts)_

## `billoapi billogram:list [PAGE] [LIMIT]`

fetch list of invoices

```
USAGE
  $ billoapi billogram:list [PAGE] [LIMIT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi billogram:list
```

_See code: [src/commands/billogram/list.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/billogram/list.ts)_

## `billoapi build`

common build commands

```
USAGE
  $ billoapi build

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi build
```

_See code: [src/commands/build/index.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/build/index.ts)_

## `billoapi build:oclif`

build oclif

```
USAGE
  $ billoapi build:oclif

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi build:oclif
```

_See code: [src/commands/build/oclif.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/build/oclif.ts)_

## `billoapi customer`

common customer commands

```
USAGE
  $ billoapi customer

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi customer
```

_See code: [src/commands/customer/index.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/customer/index.ts)_

## `billoapi customer:create`

create a single customer

```
USAGE
  $ billoapi customer:create

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi customer:create
```

_See code: [src/commands/customer/create.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/customer/create.ts)_

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

## `billoapi init`

initialize and store API credentials

```
USAGE
  $ billoapi init

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi init
```

_See code: [src/commands/init/index.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/init/index.ts)_

## `billoapi whoami`

check who you are

```
USAGE
  $ billoapi whoami

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ billoapi whoami
```

_See code: [src/commands/whoami/index.ts](https://github.com/weactivist/billoapi/blob/v0.0.0/src/commands/whoami/index.ts)_
<!-- commandsstop -->
