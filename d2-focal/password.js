const args = process.argv.slice(2);


const replacer = (string) => {
  const replacements = {'a': '4', 'e': '3', 'o': '0', 'l': '1'};
  return string.replace(/a|e|o|l/g, char => replacements[char]);
};

console.log(replacer(args[0]));