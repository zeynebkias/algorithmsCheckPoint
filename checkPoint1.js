
//--------------------------------------------------------------------------

// lengthSentence

function lengthSentence(sentence){
    return sentence.length;
  }
  console.log(lengthSentence("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));


// wordsNumber

function WordsNumber(sentence){
  return sentence.split(' ').length;
}
console.log(WordsNumber("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));



// vowelsNumber

function vowelsNumber(sentence){
  const count = sentence.match(/[aeiou]/gi).length;

    return count;
}
let str="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
console.log(vowelsNumber(str));




