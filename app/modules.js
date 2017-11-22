exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
      var mod = {

          greeting: str1,

          name: str2,

          sayIt: function(){
              return this.greeting +', ' + this.name;
          }

      };
      return mod;
  }
};
