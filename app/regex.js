exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
      let rx = new RegExp(/\d+/g);
      return rx.test(str);
  },

  containsRepeatingLetter: function(str) {
      let rx = new RegExp(/([a-zA-Z]).*?\1/);
      return rx.test(str);
  },

  endsWithVowel: function(str) {
      let rx = new RegExp(/[aeiouAEIOU]$/);
      return rx.test(str);
  },

  captureThreeNumbers: function(str) {
      let rx = new RegExp(/\d{3}/);
      let match = str.match(rx);
      if(match) return match[0];
      return false;
  },

  matchesPattern: function(str) {
      let rx = new RegExp(/^\d{3}(-)\d{3}(-)\d{4}$/);
      return rx.test(str);
  },

  isUSD: function(str) {
      let rx = new RegExp(/^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/);
      return rx.test(str)
  }
};
