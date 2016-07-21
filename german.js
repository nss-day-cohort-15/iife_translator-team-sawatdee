// var Translate = (function(German)

  var inputEnglish= "Merry Christmas"
  var German = {"christmas": "Weihnachten",
  					   "new": "neu",
  					   "hanukkah": "Hanukkah",
  					   "year": "jahr",
  					   "merry": "frohlich",
  					   "happy": "glucklich",
  					   "yule": "julfest",
  					   "and": "und",
  					   "the": "das",
  					   "wish": "wunsch",
  					   "you": "sie",
  					   "a": "ein",
  					   "we": "wir"
};
var inputWords=inputEnglish.toLowerCase().split(" ")
// this gives us our English words split into 2 seperate string objects//////
console.log(inputWords);

// FOR LOOP

for (var i = 0; i< German.length; i++) {
  German[i];

var key = inputWords[i]
translatedWord= German[key]
// pushes the value of translatedWord into a new variable called translatedWords
translatedWords.push(German[inputWords[i]]);
console.log (translatedWords);

}





