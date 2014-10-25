'use strict';
var scaler = require('./index');
var expect = require('expect.js');

describe('scaler', function () {
    describe('discrete', function () {
        it('should return the same list when ordered', function () {
            expect(scaler.scale([1, 2, 3], {
                min: 1,
                max: 3
            })).to.eql([1, 2, 3]);
        });

        it('should scale down a list', function () {
            expect(scaler.scale([1, 2, 5], {
                min: 1,
                max: 3
            })).to.eql([1, 2, 3]);
        });

        it('should scale down a list with no max', function () {
            expect(scaler.scale([1, 2, 5], {
                min: 1
            })).to.eql([1, 2, 3]);
        });

        it('should scale down a list with high max', function () {
            expect(scaler.scale([1, 2, 5], {
                min: 1,
                max: 100000
            })).to.eql([1, 2, 3]);
        });

        it('should scale down a list with negatives', function () {
            expect(scaler.scale([1, 2, -5], {
                min: 1,
                max: 3
            })).to.eql([2, 3, 1]);
        });

        it('should scale down a list negatives', function () {
            expect(scaler.scale([1, 2, 5], {
                min: -11,
                max: -9
            })).to.eql([-11, -10, -9]);
        });

        it('should scale up a list', function () {
            expect(scaler.scale([1, 2, 5], {
                min: 3,
                max: 5
            })).to.eql([3, 4, 5]);
        });

        it('should scale a list in middle', function () {
            expect(scaler.scale([1, 2, 5], {
                min: 2,
                max: 4
            })).to.eql([2, 3, 4]);
        });

        it('should scale a list with same numbers', function () {
            expect(scaler.scale([1, 1, 1], {
                min: 1,
                max: 4
            })).to.eql([1, 1, 1]);
        });

        it('should scale a list with same numbers', function () {
            expect(scaler.scale([1, 1, 1], {
                min: 2,
                max: 4
            })).to.eql([2, 2, 2]);
        });

        it('should scale a large list', function () {
            expect(scaler.scale([1, 50, 70, 80, 3050, 8, 703], {
                min: 1,
                max: 7
            })).to.eql([1, 3, 4, 5, 7, 2, 6]);
        });

        it('should scale a large list', function () {
            expect(scaler.scale([-1, -50, -70, -80, -3050, -8, -703], {
                min: 1,
                max: 7
            })).to.eql([7, 5, 4, 3, 1, 6, 2]);
        });

        it('should return empty array when empty', function () {
            expect(scaler.scale([], {
                min: 1,
                max: 7
            })).to.eql([]);
        });

        it('should throw an error when more uniques than spread', function () {
            expect(scaler.scale).withArgs([1, 2, 3], {
                min: 1,
                max: 2
            }).to.throwError();
        });

        it('should throw when max < min', function () {
            expect(scaler.scale).withArgs([1, 2, 3], {
                min: 6,
                max: 2
            }).to.throwError();
        });

        it('should work with step of 2', function () {
            expect(scaler.scale([1, 2, 3], {
                min: 1,
                max: 6,
                step: 2
            })).to.eql([1, 3, 5]);
        });

        it('should throw when range is too low with step', function () {
            expect(scaler.scale).withArgs([1, 2, 3], {
                min: 1,
                max: 4,
                step: 2
            }).to.throwError();
        });
    });
    describe('contionous', function () {
        it('todo');
    });
});
