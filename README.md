oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

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
@blok-codes/fame-ts/0.0.0 linux-x64 node-v16.7.0
$ fame-ts --help [COMMAND]
USAGE
  $ fame-ts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fame-ts hello PERSON`](#fame-ts-hello-person)
* [`fame-ts hello world`](#fame-ts-hello-world)
* [`fame-ts help [COMMAND]`](#fame-ts-help-command)
* [`fame-ts plugins`](#fame-ts-plugins)
* [`fame-ts plugins:inspect PLUGIN...`](#fame-ts-pluginsinspect-plugin)
* [`fame-ts plugins:install PLUGIN...`](#fame-ts-pluginsinstall-plugin)
* [`fame-ts plugins:link PLUGIN`](#fame-ts-pluginslink-plugin)
* [`fame-ts plugins:uninstall PLUGIN...`](#fame-ts-pluginsuninstall-plugin)
* [`fame-ts plugins update`](#fame-ts-plugins-update)

## `fame-ts hello PERSON`

Say hello

```
USAGE
  $ fame-ts hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./app/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/JudeSeide/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `fame-ts hello world`

Say hello world

```
USAGE
  $ fame-ts hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./app/commands/hello/world.ts)
```

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/app/commands/help.ts)_

## `fame-ts plugins`

List installed plugins.

```
USAGE
  $ fame-ts plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fame-ts plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/app/commands/plugins/index.ts)_

## `fame-ts plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fame-ts plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fame-ts plugins:inspect myplugin
```

## `fame-ts plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fame-ts plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ fame-ts plugins add

EXAMPLES
  $ fame-ts plugins:install myplugin 

  $ fame-ts plugins:install https://github.com/someuser/someplugin

  $ fame-ts plugins:install someuser/someplugin
```

## `fame-ts plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fame-ts plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ fame-ts plugins:link myplugin
```

## `fame-ts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fame-ts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fame-ts plugins unlink
  $ fame-ts plugins remove
```

## `fame-ts plugins update`

Update installed plugins.

```
USAGE
  $ fame-ts plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
