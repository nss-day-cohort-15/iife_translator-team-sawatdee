var Translator = (function(translator){
  translator.translate = function() {
    console.log("working")
    var inputWords = inputText.value.toLowerCase().split(" ")
    var translatedWords = [];
    var language = translator[select.value]
    for (var i = 0; i < inputWords.length; i++) {
      translatedWords.push(language[inputWords[i]]);
    }
    console.log(translatedWords)
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
