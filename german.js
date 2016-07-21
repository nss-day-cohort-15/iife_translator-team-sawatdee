// var Translate = (function(German)
translator.German = (function() {
  return function() {
    var translatedWords= [];
    var inputWords= inputText.value.toLowerCase().split(" ")
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
  // this gives us our English words split into 2 seperate string objects//////

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
  translatedWords.push(German[key]);
  // console.log (translatedWords);

} translation.innerHTML = translatedWords.join(" ");
}})()
