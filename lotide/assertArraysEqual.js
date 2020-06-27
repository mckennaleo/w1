const eqArray = (actual, expected) => {
  const actualToString = actual.toString();
  const expectedToString = expected.toString();
  if (actualToString === expectedToString) {
    return true;
  } else {
    return false;
  }
};

const assertEqualArray = (eqArray) => {
  if (eqArray === true) {
    console.log("The arrays match");
  } else {
    console.log("The arrays don't match");
  }
};

assertEqualArray(eqArray([1, 2, 3], [1, 2, 3]));