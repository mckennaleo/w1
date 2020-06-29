const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns the key who has the assigned value in the object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "scifi");
  });
});
