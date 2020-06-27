const raisinAlarmArray = function(cookie) {
  let result = [];
  for (let arrays of cookie) {
    if (arrays.includes('🍇')) {
      result.push('Raisin alert!')
    } else {
      result.push('All good!');
    }
  }
  return result;
}


console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));