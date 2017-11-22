exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {
    // var regex = '.{1,' +cols+ '}(\s|$)' + (false ? '|.{' +width+ '}|.+$' : '|\S+?(\s|$)');
    // return str.match( RegExp(regex, 'g') ).join( '\n' );
  },

  reverseString: function(str) {
      return str.split("").reverse().join("")
  }
};
