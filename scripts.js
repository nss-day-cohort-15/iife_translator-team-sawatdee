
var translator = (function() {
  return {
    getThai: function() {
      var inputWords = inputText.value.toLowerCase().split(" ")
      var translatedWords = [];
      var thai = {
        merry: "ร่าเริง",
        christmas: "คริสต์มาส",
        happy: "มีความสุข",
        new: "ใหม่",
        year: "ปี",
        and: "และ"
      }
      console.log(thai.merry)
      for (var i = 0; i < inputWords.length; i++) {
        translatedWords.push(thai[inputWords[i]]);
      }
      translation.innerHTML = translatedWords.join(" ");
    }
  }
    })()

submit.addEventListener("click", translator.thai)

