const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const countLetters = (string) => {
  const letterCount = {};
  for (let str of string) {
    if (str !== ' ') {
      letterCount[str] = letterCount[str] || 0;
      letterCount[str]++;
    }
  }
  return letterCount;
};

console.log(countLetters('hello world'));