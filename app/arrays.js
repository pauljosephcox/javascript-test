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

      for(var i in arr) if(arr[i] == item) arr.splice(i,1);
      if(arr.indexOf(item) > -1) this.removeWithoutCopy(arr,item);
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.splice(0,0,item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {

      let total = 0;
      for(let i in arr) if(arr[i] == item) total++;
      return total;

  },

  duplicates: function(arr) {

      var all = [];
      var dups = [];
      for(let i in arr){

          if((all.indexOf(arr[i]) > -1) && dups.indexOf(arr[i]) <= -1) dups.push(arr[i]);
          all.push(arr[i]);

      }
      return dups;

  },

  square: function(arr) {
      return arr.map((i) => i*i);
  },

  findAllOccurrences: function(arr, target) {
      let indexes = [];
      for(let i in arr) if(arr[i] == target) indexes.push(i);
      return indexes;
  }
};
