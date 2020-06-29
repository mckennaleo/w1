const eqArrays = (actual, expected) => {
  const actualToString = actual.toString();
  const expectedToString = expected.toString();
  if (actualToString === expectedToString) {
    return true;
  } else {
    return false;
  }
};
module.exports = eqArrays;