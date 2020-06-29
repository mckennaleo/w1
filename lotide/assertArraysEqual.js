const eqArrays = require('./eqArrays');

const assertEqualArray = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log("The arrays match");
  } else {
    console.log("The arrays don't match");
  }
};


module.exports = assertEqualArray;