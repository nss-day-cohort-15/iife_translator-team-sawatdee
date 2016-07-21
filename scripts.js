submit.addEventListener("click", main)

function main() {
  var inputEnglish = inputText.value.toLowerCase()
  var inputWords = inputEnglish.split(" ");
  var translatedWords = [];
  var selectValue = document.select.value

  main.setTranslator = function(translator) {
    if (selectValue === Thai) {
    runTranslator = go;
    return go;
  }

  var pigLatin = {
    merry: "erry-May",
    christmas: "istmas-Chray",
    happy: "appy-Hay",
    new: "ew-Nay",
    year: "ear-Yay",
    and: "and-way"
  }

  for (var i = 0; i < inputWords.length; i++) {
    translatedWords.push(pigLatin[inputWords[i]]);
  }

  var translatedPhrase = translatedWords.join(" ");

  console.log(translatedPhrase)
}

console.log(piglatin.merry) - calls the value of Merry becuase merry is the key
