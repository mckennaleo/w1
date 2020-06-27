const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const nameList = (array) => {
  const newArray = [];
  for (let i of array) {
    newArray.push(i);
  }
  return newArray.name.sort();
};

console.log(nameList(students));