const nameInverter = function(name) {
  if (name === undefined) {
    return "throw 'Error'";
  }
  const usedName = name.replace(/^\s+|\s+$/g, "");

  if (usedName === "Mr." || usedName === "Mrs." || usedName === "Ms." || usedName === "Dr." || usedName === "Mr. " || usedName === "Mrs. " || usedName === "Ms. " || usedName === "Dr. " || usedName === "") {
    return "";
  }
  if (!usedName.includes(' ')) {
    return usedName;
  }
  const nameWords = usedName.split(' ');
  let newNameArray = [];
  let newName = "";
  if (!usedName.includes('.')) {
    newNameArray = [nameWords[1], nameWords[0]];
    newName = newNameArray.join(', ');
    return newName;
  }
  if (usedName.includes('.') && nameWords.length === 2) {
    return usedName;
  }
  if (usedName.includes('.') && nameWords.length === 3) {
    newNameArray = [nameWords[0], nameWords[2] + ',' ,nameWords[1]];
    newName = newNameArray.join(' ');
    return newName;
  }

  

};

module.exports = nameInverter;
