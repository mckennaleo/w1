const findKeyByValue = (object, value) => {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
