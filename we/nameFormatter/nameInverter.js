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
  const lastIndex = usedName.length - 1;
  if (!usedName.includes(' ')) {
    return usedName.substring(1, lastIndex);
  }
  const nameWords = usedName.split(' ');
  let newNameArray = [];
  let newName = "";
  const finalNewName = newName.replace(/^\s+|\s+$/g, "");
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
