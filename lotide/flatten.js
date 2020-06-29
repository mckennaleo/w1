const flatten = (array) => {
  const flattenedArray = [].concat(...array);
  return flattenedArray;
};

module.exports = flatten;
