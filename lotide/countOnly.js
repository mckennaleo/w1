const countOnly = (allItems, itemsToCount) => {
  const currentCount = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      currentCount[item] = currentCount[item] || 0;
      currentCount[item]++;
    }
  }
  return currentCount;
};

module.exports = countOnly;
