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

const middle = (array) => {
  const newArray = [];
  const middlePosition = Math.ceil(array.length / 2 - 1);
  if (array.length % 2 === 1) {
    newArray.push(array[middlePosition]);
  }
  if ((array.length % 2 === 0) || (array.length > 2)) {
    newArray.push(array[middlePosition]);
    newArray.push(array[middlePosition + 1]);
  }
  return newArray;
};

