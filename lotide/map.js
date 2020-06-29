const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["guinea", "cat", "tank", "mole", "tina"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

module.exports = map;