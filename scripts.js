console.dir(submit);

submit.addEventListener("click", main);

function main (){
var inputEnglish =
var Thai = {
  Merry : "ร่าเริง",
  Christmas : "คริสต์มาส",
  Happy : "มีความสุข",
  New: "ใหม่",
  Year : "ปี",
  and : "และ"
}

var inputWords = inputEnglish.split(" ");
var translatedWords = [];

for (var i = 0; i < inputWords.length; i++) {
  translatedWords.push(Thai[inputWords[i]]);
}

newString = translatedWords.join(" ");
console.log(newString);

.inner

}

