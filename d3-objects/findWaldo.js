const findWaldo = function(index) {
  for (let i = 0; i < index.length; i++) {
    if (i === "Waldo") {
      return `index ${i}`;
    }
  }
};

const actionWhenFound = function() {
  console.log(`Found Waldo at ${findWaldo(index)}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);