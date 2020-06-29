const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true for [1, 2, 3] , [1, 2, 3]", () => {
    assert.strictEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for ['5'], [1, 2, 3]", () => {
    assert.strictEqual(eqObjects(['5'], [1, 2, 3]), false);
  });
});