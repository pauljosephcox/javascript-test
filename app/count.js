exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

      console.log(start);

      this.interval = setInterval(() => {
        if (start === end) {
          this.cancel();
        } else {
          start++;
          console.log(start);
        }
      }, 100);

      return this;

    },
    cancel: function(){
        clearInterval(this.interval);
    }

};
