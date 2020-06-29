const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');

describe("#middle", () => {
  it("returns an array with just the middle index if its length is uneven", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3]), [2]), true);
  });
  it("returns an array with the two middle index if its length is even", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
  });
});

