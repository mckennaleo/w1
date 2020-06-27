const eqArray = (actual, expected) => {
  const actualToString = actual.toString();
  const expectedToString = expected.toString();
  if (actualToString === expectedToString) {
    return true;
  } else {
    return false;
  }
};

console.log(eqArray([1, 2, 3], [1, 2, 3]));