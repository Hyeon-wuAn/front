$(document).ready(function () {
  myScroller.init();
});

const myScroller = {
  init: function () {
    $(document).scroll(function () {
      const currentPosition = $(window).scrollTop();
      const techPosition = $(".tech-content").offset().top;
      const newsPosition = $("#news").offset().top;
      const welcomePosition = $("#home-page #welcome").offset().top;

      if (
        currentPosition > techPosition - 600 &&
        currentPosition < techPosition + 900
      ) {
        $(".tech-content").addClass("effect");
      } 
      else {
        $(".tech-content").removeClass("effect");
      }
      if (
        currentPosition > newsPosition - 700 &&
        currentPosition < newsPosition + 900
      ) {
        $("#news").addClass("effect");
      } else {
        $("#news").removeClass("effect");
      }
      // if (
      //   currentPosition > welcomePosition - 700 &&
      //   currentPosition < welcomePosition + 900
      // ) {
      //   $("#home-page #welcome").addClass("effect");
      // } else {
      //   $("#home-page #welcome").removeClass("effect");
      // }

     
    });
  },
};
