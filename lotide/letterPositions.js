const letterPositions = (sentence) => {
  const results = {};
  for (let i in sentence) {
    if (sentence[i] !== " ") {
      results[sentence[i]] = results[sentence[i]] || [];
      results[sentence[i]].push(i);
    }
  }

  return results;
};

console.log(letterPositions('hows everyone doing?'));