const args = process.argv.slice(2);

const add = (num1, num2) => {
  return (Number(num1) + Number(num2)) 
};
console.log(add(args[0], args[1]));
