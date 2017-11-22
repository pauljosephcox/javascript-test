exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
      //
      // let interval = setInterval(function(){
      //
      //     // if(start >= end) clearInterval(interval);
      //     // else {
      //     //
      //     //     start++;
      //     //     console.log(start);
      //     // }
      //     console.log("HELLO WORLD");
      //
      // },100);
      // return this;
      // if(start >= end) clearInterval(interval);
      // else {
      //
      //     console.log(start);
      //     start++;
      //     setInterval(function(){
      //
      //     })
      //     this.count(start,end);
      //
      //
      // }
      // setTimeout(function(){ alert("Hello"); }, 3000);
      // console.log(start);

      // console.log(start);

      this.interval = setInterval(function () {

          if(start === end) {
              this.cancel();
          } else {

              start++;
              // return start;

          }

      }, 100);

      this.cancel = function(){
          clearInterval(this.interval);
      }

      return this;

  }
};
