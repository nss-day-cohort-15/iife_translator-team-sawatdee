var translator = {}

translator.checkLanguage = (function() {
  return function() {
      if (select.value === "pigLatin") {
        translator.getPigLatin();
      } else if (select.value === "Thai") {
        translator.Thai();
      } else if (select.value === "German") {
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
