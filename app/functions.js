exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn.apply(null,arr);
  },

  speak: function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function(str) {

      return function(b){ return str + ', ' + b; }

  },

  makeClosures: function(arr, fn) {

      var closures = [];
      for(let i in arr) closures.push(function(){ return fn(arr[i]); })
      return closures;
  },

  partial: function(fn, str1, str2) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function(){
          var remainingArgs = Array.prototype.slice.call(arguments)
          return fn.apply(null, args.concat(remainingArgs))
      }
  },

  useArguments: function() {
      var total = 0;
      for(let i in arguments) total += arguments[i];
      return total;
  },

  callIt: function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null,args);
  },

  partialUsingArguments: function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function(){
          var remainingArgs = Array.prototype.slice.call(arguments)
          return fn.apply(null, args.concat(remainingArgs))
      }
  },

  curryIt: function(fn) {

      return function(x) {
          return function(y) {
              return function(z) {
                  return fn(x, y, z);
              };
          };
      };

  }
};
