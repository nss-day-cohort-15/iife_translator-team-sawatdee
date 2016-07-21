// var Translate = (function(German)

  var translatedWords= [];
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

for (var i = 0; i< inputWords.length; i++) {

var key = inputWords[i]
// console.log(key);
//merry//

// console.log(German.merry);
//frohlich

// console.log(German[key]);
//frohlich

// translatedWord= German[key]
// pushes the German value pair of translatedWord into a new variable called translatedWords
translatedWords.push(German[inputWords[i]]);
// console.log (translatedWords);

}





