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
      console.log(pigLatin.merry)
      for (var i = 0; i < inputWords.length; i++) {
        translatedWords.push(pigLatin[inputWords[i]]);
      }
      translation.innerHTML = translatedWords.join(" ");
    }
  }

    })()

submit.addEventListener("click", translator.getPigLatin)
