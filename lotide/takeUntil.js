const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item) !== true) {
      result.push(item);
    } else {
      return result;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

