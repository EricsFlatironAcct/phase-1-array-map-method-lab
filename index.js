const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //maps tutorials into individual sentences
  return tutorials.map(function(sentence){
    //splits each sentence into an array, then maps the array
    return sentence.split(" ").map(function(word){
      //Forces the first character to be upper case and returns each word back to the sentence (array)
      return word.slice(0,1).toUpperCase()+word.slice(1);
    //turns the sentence array back into a string with spaces
    }).join(" ");
  })
}
