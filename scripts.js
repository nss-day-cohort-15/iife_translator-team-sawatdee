submit.addEventListener("click", main)

function main() {
  var inputEnglish = inputText.value.toLowerCase()
  var inputWords = inputEnglish.split(" ");
  var translatedWords = [];

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

  console.log(translatedPhrase);
}
