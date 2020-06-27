const eqObjects = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  let obj1Values = Object.values(obj1);
  let obj2Values = Object.values(obj2);
  let keyCompare = [];
  let valueCompare = [];
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let i of obj1Keys) {
    for (let j of obj2Keys) {
      if (i === j) {
        keyCompare.push(i);
      }
    }
  }
  if (keyCompare.length !== obj1Keys.length || keyCompare.length !== obj2Keys.length) {
    return false;
  }
  for (let i of obj1Values) {
    for (let j of obj2Values) {
      if (i === j && (!valueCompare.includes(i))) {
        valueCompare.push(i);
      }
    }
  }
  if (valueCompare.length !== obj1Values.length || valueCompare.length !== obj2Values.length) {
    return false;
  } else {
    return true;
  }
};

const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if ((eqObjects(actual, expected)) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

assertObjectEqual({ a: '1', b: 2 }, { b: 2, a: '1' });