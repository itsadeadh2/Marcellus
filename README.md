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
$ marcellus create -n foo -d bar
```
`-n`: aplication name `-d`: application description
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