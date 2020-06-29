const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
describe("#countOnly", () => {
  it("returns true for assertEqual(result1[Jason], 1)", () => {
    assert.strictEqual(assertEqual(result1["Jason"], 1), true);
  });
  it("returns true for assertEqual(result1[Karima], undefined)", () => {
    assert.strictEqual(assertEqual(result1["Karima"], undefined), true);
  });
});
