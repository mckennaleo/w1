const assert = require('chai').assert;
const map = require('../map');
const eqArrays = require('../eqArrays');
const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns a map array", () => {
    assert.strictEqual(eqArrays(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']), true);
  });
});
