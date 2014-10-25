'use strict';

var uniq = require('array-uniq');
var DEFAULT_STEP = 1;

function scaleDiscreteByMin(arr, min, step) {
    var arrCopy = arr.slice();
    var returnArr = [];
    var nextFreeItem = min;
    var length = arrCopy.length;
    var smallest, i, j;
    for (j = 0; j < length; ++j) {
        smallest = Math.min.apply(Math, arrCopy);
        if (smallest === Infinity) {
            break;
        }
        for (i = 0; i < length; ++i) {
            if (arrCopy[i] === smallest) {
                returnArr[i] = nextFreeItem;
                arrCopy[i] = Infinity;
            }
        }
        //increment by step
        nextFreeItem += step;
    }
    return returnArr;
}

function discrete(arr, options) {
    options = options || {};
    var step = options.step || DEFAULT_STEP;
    //if no max supplied - use Infinity
    var max = typeof options.max === 'number' ? options.max : Infinity;
    var min = options.min;
    if (typeof min !== 'number') {
        throw new Error('Expecting a minimum number');
    }
    //negative spread is a mistake
    var spread = Math.max(max - min + 1, 0);
    var uniques = uniq(arr).length;
    if (uniques * step > spread) {
        var msg = ['Count of unique items (' + uniques + ')',
            'is more than spread (' + spread + ')',
            '/ step (' + step + ')'
        ].join(' ');
        throw new Error(msg);
    }

    return scaleDiscreteByMin(arr, min, step);
}

function continuous(arr, options) {
    var smallest = Infinity;
    var largest = -Infinity;

    arr.forEach(function (item) {
        if (item < smallest) {
            smallest = item;
        }
        if (item > largest) {
            largest = item;
        }
    });

    var range = options.max - options.min;
    var spread = largest - smallest;
    var ratio = range / spread;

    return arr.map(function (item) {
        return options.min + ratio * (item - smallest);
    });
}

/**
 * scale
 *
 * @param {number[]} arr - Array to scale
 * @param {number} [options.max] - Maximum number to fit in
 * @param {number} options.min - Minimum number to fit in
 * @param {boolean} [options.continuous] Should the return array be continuous or discrete
 * @return Array
 */
function scale(arr, options) {
    if (!arr || !Array.isArray(arr)) {
        throw new TypeError('Expecting an array');
    }

    if (!arr.length) {
        return [];
    }

    var fn = options.continuous ? continuous : discrete;
    return fn(arr, options);
}

exports.scale = scale;
