const assert = require('chai').assert;
const map = require('../map');
const eqArrays = require('../eqArrays');

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["guinea", "cat", "tank", "mole", "tina"];

describe("#map", () => {
  it("returns a map array", () => {
    assert.strictEqual(eqArrays(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']), true);
  });
});
