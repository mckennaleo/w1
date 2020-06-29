const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns an object with every position of letters", () => {
    assert.deepEqual(letterPositions('hows everyone doing'), { h: [ '0' ],
      o: [ '1', '10', '15' ],
      w: [ '2' ],
      s: [ '3' ],
      e: [ '5', '7', '12' ],
      v: [ '6' ],
      r: [ '8' ],
      y: [ '9' ],
      n: [ '11', '17' ],
      d: [ '14' ],
      i: [ '16' ],
      g: [ '18' ] }, true);
  });
});