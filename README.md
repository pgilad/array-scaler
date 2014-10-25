# scaler
> scale an array to discrete or continuous scale preserving order

[![NPM Version](http://img.shields.io/npm/v/scaler.svg?style=flat)](https://npmjs.org/package/scaler)
[![NPM Downloads](http://img.shields.io/npm/dm/scaler.svg?style=flat)](https://npmjs.org/package/scaler)
[![Build Status](http://img.shields.io/travis/pgilad/scaler.svg?style=flat)](https://travis-ci.org/pgilad/scaler)

## Install

```bash
$ npm install --save scaler
```

## Usage

```js
var scaler = require('scaler');

var scaledArray = scaler.scale([1, 2, 5], {
        min: 1
});

console.log(scaledArray);
//=> [1, 2, 3]

scaledArray = scaler.scale([1, 2, 5]), {
        min: 1,
        step: 2
});

console.log(scaledArray);
//=> [1, 2, 3]
```

## The Output
```js
[{
    "file": "index.js",
    "code": "i = i + 2",
    "value": 2,
    "loc": {
        "start": {
            "line": 5,
            "column": 28
            },
        "end": {
            "line": 5,
            "column": 29
            }
        }
}]
```

## API

### enforceConst

Type: `Boolean`

Default: `false`

Whether to force variable declarations to be defined with `const`

### ignore

Type: `Array`

Default: `[0, 1]`

What numbers should be ignored.

### file

Type: `String`

Default: `null`

Filename being checked if available (i.e not from a stream). Will be attached
to the result object.

## License
MIT @[Gilad Peleg](http://giladpeleg.com)
