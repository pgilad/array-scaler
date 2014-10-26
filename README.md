# scaler [![Build Status](http://img.shields.io/travis/pgilad/scaler.svg?style=flat)](https://travis-ci.org/pgilad/scaler)

> Scale an array preserving order to a discrete or continuous scale

## Install

```bash
$ npm install --save scaler
```

## Usage

```js
var scaler = require('scaler');

// scale a simple array with default step = 1
var scaledArray = scaler.scale([1, 2, 5], {
        min: 1
});
console.log(scaledArray);
//=> [1, 2, 3]

// scale a simple array with a custom step
scaledArray = scaler.scale([1, 2, 5]), {
        min: 1,
        step: 2
});
console.log(scaledArray);
//=> [1, 3, 5]

// provide max value to validate fitting (using unique items)
scaledArray = scaler.scale([1, 2, 5]), {
        min: 1,
        max: 2
});
//=> Error: Count of unique items (3) is more than spread (2) / step (1)

// works with negative numbers and negative range
scaledArray = scaler.scale([-10, 5, -1]), {
        min: -5,
        step: 1
});
console.log(scaledArray);
//=> [-5, -3, -4]

// Get a continuous scale
var scaledArray = scaler.scale([1, 2, 5], {
        min: 1,
        max: 3,
        continuous: true
});
console.log(scaledArray);
//=> [1, 1.5, 3]
```

## API


## License
MIT @[Gilad Peleg](http://giladpeleg.com)
