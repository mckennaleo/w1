const flatten = (array) => {
  const flattenedArray = [].concat(...array);
  return flattenedArray;
};
console.log(flatten([1, 2, [3, [4]], 5, [6]]));