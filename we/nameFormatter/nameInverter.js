const nameInverter = function(name) {
  if (name === undefined || name === null) {
    return "throw 'Error'";
  }
  const usedName = name.replace(/^\s+|\s+$/g, ""); //regEx trim method

  if (usedName === "Mr." || usedName === "Mrs." || usedName === "Ms." || usedName === "Dr." || usedName === "") {
    return "";
  }
  if (!usedName.includes(' ')) {
    return usedName;
  }
  const nameWords = usedName.split(' ');
  if (!usedName.includes('.')) {
    return [nameWords[1], nameWords[0]].join(', ');
  }
  if (usedName.includes('.') && nameWords.length === 2) {
    return usedName;
  }
  if (usedName.includes('.') && nameWords.length === 3) {
    return [nameWords[0], nameWords[2] + ',' ,nameWords[1]].join(' ');
  }
};
module.exports = nameInverter;
