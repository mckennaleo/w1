const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//create a new array
//iterate over students

const compare = (a, b) => {
  
  const studentsA = a.name()
  const studentsB = b.name()

  let comparison = 0;
  if (studentsA > studentsB) {
    comparison = 1;
  } else if (studentsA < studentsB) {
    comparison = -1;
  }
  return comparison;
}

students.sort(compare);
console.log(compare(students))