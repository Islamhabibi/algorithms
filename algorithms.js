function analyzeSentence(sentence) {
  var word = 0;
  var vowelCount = 0;
  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    if (char === ' ' || char==='.' )  {
      word++;
    } 
     if (char==='a' ||char==='e'||char==='i'||char==='o'||char==='u' ){
         vowelCount++
     }
  }
  return {
    length: sentence.length,
    word: word,
    vowelCount:vowelCount
  };
}
 
  var sentence = "Hello, howa.";
var analysis = analyzeSentence(sentence);
console.log(analysis);