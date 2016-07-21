var inputEnglish = "Merry Christmas"
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

console.log(translatedWords);
