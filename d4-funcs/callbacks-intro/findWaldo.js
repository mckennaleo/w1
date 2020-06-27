
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// };

// const actionWhenFound = (index) => {
//   console.log(`Found him at index ${index}`);
// };

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// FOREACH


const findWaldo = function(names, found) {
  names.forEach((element) => {
    if (element === "Waldo") {
      found(names.indexOf(element))
    }
  });
};

const actionWhenFound = (index) => {
  console.log(`Found him at index ${index}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);