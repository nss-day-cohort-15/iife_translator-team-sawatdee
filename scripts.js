var translator = (function() {
  return {
    getPigLatin: function() {
      var inputWords = inputText.value.toLowerCase().split(" ")
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
      translation.innerHTML = translatedWords.join(" ");
    }
  }
})()

translator.checkLanguage = (function() {
  return function() {
      if (select.value === "pigLatin") {
        translator.getPigLatin();
      } else if (select.value === "Thai") {
        console.log("Running Thai Conversion");
        translator.Thai();
      } else if (select.value === "German") {
        console.log("Running German Conversion");
        translator.German();
      }
    }
})()

translator.submitEvents = (function() {
  submit.addEventListener("click", translator.checkLanguage)
  document.addEventListener("keypress", checkKey)

  function checkKey(e) {
    if (e.keyCode === 13) {
      translator.checkLanguage();
    }
  }
})()
