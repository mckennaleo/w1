const isPalindrome = function(s) {
  let stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
};

module.exports = isPalindrome;


