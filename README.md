cross
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the cross product between two numeric arrays.


## Installation

``` bash
$ npm install compute-cross
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var foo = require( 'compute-cross' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-cross' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-cross.svg
[npm-url]: https://npmjs.org/package/compute-cross

[travis-image]: http://img.shields.io/travis/compute-io/cross/master.svg
[travis-url]: https://travis-ci.org/compute-io/cross

[coveralls-image]: https://img.shields.io/coveralls/compute-io/cross/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/cross?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/cross.svg
[dependencies-url]: https://david-dm.org/compute-io/cross

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/cross.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/cross

[github-issues-image]: http://img.shields.io/github/issues/compute-io/cross.svg
[github-issues-url]: https://github.com/compute-io/cross/issues
