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






const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["guinea", "cat", "tank", "mole", "tina"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);

console.log(results2);


assertEqualArray(eqArray(results1, results2));
assertEqualArray(eqArray(results2, words1));
assertEqualArray(eqArray(words1, words));