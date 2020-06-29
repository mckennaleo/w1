const assert = require('chai').assert;
const without = require('../without');
const eqArrays = require('../eqArrays');

describe("#without", () => {
  it("returns an array without the itemsToRemove", () => {
    assert.strictEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
  });
  it("returns an array without the itemsToRemove", () => {
    assert.strictEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true);
  });
});

