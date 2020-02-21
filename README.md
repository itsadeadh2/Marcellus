<!-- [![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/) -->

  CLI tool for creating API's in [express](https://www.npmjs.com/package/express).


```bash
$ npm install -g marcellus
$ marcellus -h
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install marcellus
```

## Features

  * Creates a MVC directory structure with the basic resources on it
  * Add new resources automatically

## Quick Start

Create a new directory and cd into it:
```bash
$ mkdir foo && cd foo
```
Create a new project with:
```bash
$ marcellus create foo
```
Create index page with:

```bash
$ marcellus add index
```
Run project (requires [express](https://www.npmjs.com/package/express)):
```bash
$ node index.js
```

  Api will be available at: http://localhost:3000/index


## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmjs.org/package/express
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master