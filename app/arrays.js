exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      return arr.reduce((a,b) => a + b,0);
  },

  remove: function(arr, item) {
      return arr.filter((a) => { return a !== item; })
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {
      arr.splice(0,0,item);
      return arr;
  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
