[![CI](https://github.com/blok-codes/-blok-codes-fame-ts/actions/workflows/main.yml/badge.svg)](https://github.com/blok-codes/-blok-codes-fame-ts/actions/workflows/main.yml)
[![Version](https://img.shields.io/npm/v/@blok-codes/fame-ts.svg)](https://www.npmjs.com/package/@blok-codes/fame-ts)
[![Node](https://img.shields.io/node/v/@blok-codes/fame-ts.svg)](https://nodejs.org/download/release/latest-v16.x/)
![GitHub](https://img.shields.io/github/license/blok-codes/-blok-codes-fame-ts)

@blok-codes/fame-ts
=================

    Convert typescript metamodel from json to an api

<br/>

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->



# Usage
<!-- usage -->
```sh-session
$ npm install -g @blok-codes/fame-ts
$ fame-ts COMMAND
running command...
$ fame-ts (--version)
@blok-codes/fame-ts/1.0.0 linux-x64 node-v16.7.0
$ fame-ts --help [COMMAND]
USAGE
  $ fame-ts COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`fame-ts update [OPTIONS]`](#fame-ts-update-options)
* [`fame-ts generate [OPTIONS]`](#fame-ts-generate-options)
* [`fame-ts autocomplete [SHELL]`](#fame-ts-autocomplete-shell)
* [`fame-ts help [COMMAND]`](#fame-ts-help-command)

## `fame-ts update [OPTIONS]`

update the typescript metamodel interface

```
USAGE
  $ fame-ts update [OPTIONS] -s <value>

ARGUMENTS
  OPTIONS  (interface|metamodel) which option to update (updating the metamodel will update the interface as well)

FLAGS
  -s, --source=<value>  (required) path to the typescript metamodel from metamodel json file

DESCRIPTION
  Update the typescript metamodel interface

EXAMPLES
  $ fame-ts update metamodel -s path/to/(metamodel).json

  $ fame-ts update metamodel --source path/to/(metamodel).json

  $ fame-ts update interface
```

_See code: [update command](app/Console/update.ts)_

## `fame-ts generate [OPTIONS]`

update the typescript metamodel interface

```
USAGE
  $ fame-ts generate [OPTIONS]

ARGUMENTS
  OPTIONS  (api) which option to generate (the generation will use the last updated metamodel)

DESCRIPTION
  Generate an api from the typescript metamodel interface

EXAMPLES
  $ fame-ts update generate api
```

_See code: [generate command](app/Console/generate.ts)_

## `fame-ts autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ fame-ts autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ fame-ts autocomplete

  $ fame-ts autocomplete bash

  $ fame-ts autocomplete zsh

  $ fame-ts autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.2.0/src/commands/autocomplete/index.ts)_

## `fame-ts help [COMMAND]`

Display help for fame-ts.

```
USAGE
  $ fame-ts help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fame-ts.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_
<!-- commandsstop -->

# Known Issues
_See [issues](./ISSUES.md)_
