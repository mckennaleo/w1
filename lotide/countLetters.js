const countLetters = (string) => {
  const letterCount = [];
  for (let str of string) {
    if (str !== ' ') {
      letterCount.push(str);
    }
  }
  return letterCount.length;
};

module.exports = countLetters;