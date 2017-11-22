exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {

  listFiles: function(data, dirName) {
      let files = this.permute(data,dirName);
      return files;
  },

  permute: function(arr,dirName) {

      let files = [];

      for(let i in arr['files']){

          if(typeof arr['files'][i] === 'string'){

              files.push(arr['files'][i]);

          } else {

              var subfiles = this.permute(arr['files'][i]);
              for(let x in subfiles) files.push(subfiles[x]);

          }

      }
      return files;

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
