exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var rx = new RegExp("(.)(?=\\1{" + amount + "})","g");
      return str.replace(rx, "");
  },

  wordWrap: function(str, cols) {

    var end = '';
    var i = 0;
    for(let letter in str){

        if(i >= cols && str[letter] == ' ') {
            end += "\n";
            i=0;
        }

        if(i == 0 && str[letter] == ' '){
            // nope
        } else {
            end += str[letter];
        }
        i++;
    }

    return end;

  },

  reverseString: function(str) {
      return str.split("").reverse().join("")
  }
};
