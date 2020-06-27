const originalWords = process.argv.slice(2);
const pigLatinWords = [];

const translateToPigLatin = (word) => {
  return word.slice(1, word.length) + word[0] + "ay";
};


for (let i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));


console.log(translateToPigLatin("igpay atinlay siay illysay"));