const without = (source, itemsToRemove) => {
  const withoutArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArray.push(source[i]);
    }
    
  }
  return withoutArray;
};

module.exports = without;