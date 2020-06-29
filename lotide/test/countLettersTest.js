const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 10 for Leo McKenna", () => {
    assert.strictEqual(countLetters("Leo McKenna"), 10);
  });
  it("returns 4 for five", () => {
    assert.strictEqual(countLetters("five"), 4);
  });
});
