const middle = (array) => {
  let newArray = [];
  const middlePosition = Math.ceil(array.length / 2 - 1);
  if (array.length % 2 === 1) {
    newArray = [array[middlePosition]];
  }
  if (array.length % 2 === 0) {
    newArray = [array[middlePosition], array[middlePosition + 1]];
  }
  return newArray;
};

module.exports = middle;