const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("populates an array from a previous one until array[callback]", () => {
    assert.strictEqual(eqArrays(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], 7), [1, 2, 5]), true);
  });
  it("returns an array with the two takeUntil index if its length is even", () => {
    assert.strictEqual(eqArrays(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], 4), [1, 2, 5, 7, 2, -1, 2]), true);
  });
});