var Translator = (function(translator){
  translator.translate = function() {
    var inputWords = inputText.value.toLowerCase().split(" ")
    var translatedWords = [];
    var language = translator[select.value]
    for (var i = 0; i < inputWords.length; i++) {
      if (language[inputWords[i]]) {
        translatedWords.push(language[inputWords[i]]);
      } else {
        translatedWords.push(inputWords[i]);
      }
    }
    translation.innerHTML = translatedWords.join(" ");
  }
  submit.addEventListener("click", translator.translate)
  document.addEventListener("keypress", checkKey)
  function checkKey(e) {
    if (e.keyCode === 13) {
      translator.translate();
    }
  }
  return translator;
})(Translator || {})
