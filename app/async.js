exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      return new Promise((resolve, reject) => {resolve(value)});
  },

  manipulateRemoteData: function(url) {

      return new Promise(function(resolve, reject){

          $.ajax(url).done(function(data){

              resolve(data.people.map(person => person.name).sort());

          })
          
      });
  }
};
