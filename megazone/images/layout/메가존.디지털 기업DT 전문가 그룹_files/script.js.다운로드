$(document).ready(function () {
  MZDPage.init();
  if (document.querySelector("#scrollTop") == null)
    $("#main").append(
      '<a id="scrollTop" style="opacity:0;position:fixed;bottom:30px;right:30px;height:46px;width:46px;z-index:5;"><svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.2381L8 2M8 2L15 9.2381M8 2V22" stroke="#141414" stroke-width="2"/></svg></a>'
    );
  $("#scrollTop").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#main").offset().top,
      },
      2000
    );
  });
});

const MZDPage = {
  //Main Page Slider
  mainSlider: function () {
    var sliderSettings = {
      swipe: true,
      infinite: true,
      speed: 500,
      // appendDots: ".control-slick",
      slidesToShow: 1.5,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: false,
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      dots: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            centerMode: true,
            arrows: false,
            dots: true,
            infinite: true,
          },
        },
      ],
    };

    $(".mzd-container #slider .slider-content").slick(sliderSettings);

    // $(
    //   "#slider .slider-content .slide-arrow.next-arrow,#slider .slider-content .slick-dots"
    // ).click(function () {
    //   $("#main .content-right .mzd-container #slider")
    //     .closest(".mzd-container")
    //     .addClass("full");
    //   sliderSettings.infinite = true;
    //   sliderSettings.slidesToShow = 1.77;
    //   sliderSettings.centerMode = false;
    //   sliderSettings.variableWidth = false;
    //   $(".mzd-container #slider .slider-content").slick("unslick");
    //   $(".mzd-container.full #slider .slider-content").slick(sliderSettings);
    //   $(".mzd-container.full #slider .slider-content").slick("slickNext");
    // });
  },

  //Welcome Slider
  mainWelcomeSlider: function () {
    $("#welcome .content-fill").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      vertical: true,
      cssEase: "linear",
      verticalReverse: true,
      accessibility: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  },
  //News Slider
  newsSlider: function () {
    $("#news .news-list").slick({
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      cssEase: "linear",
      mobileFirst: true,
      dots: true,
      centerMode: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 991,
          settings: "unslick",
        },
      ],
    });
  },
  //Tech Slider
  techSlider: function () {
    $(".tech-content .content-list").slick({
      infinite: false,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      cssEase: "linear",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: "unslick",
        },
      ],
    });
  },

  //Change Type of Item in Insight Main Page
  changeInsightList: function () {
    if (window.outerWidth < 991) {
      var startY;
      var yDistance;
      function touchHandler(event) {
        touch = event.changedTouches[0];
        event.preventDefault();
      }
      $('#insight-list .types .type').on("touchstart touchend", touchHandler);

      $('#insight-list .types .type').on("touchstart", function () {
        startY = touch.clientY;
      });

      $('#insight-list .types .type').on('touchend', function () {
        yDistance = startY - touch.clientY;
        if (Math.abs(yDistance) == 0) {
          // console.log("button pressed")
          const type = $(this).text();
          const index = $(this).attr("data-slick-index");
          $("#insight-list .types .type").each(function () {
            if (index == $(this).attr("data-slick-index"))
              $(this).addClass("active");
            else $(this).removeClass("active");
          });
          // $("#insight-list .types .slick-track").css(
          //   "transform",
          //   "translate3d(-" +
          //     $(this).attr("data-slick-index") * 40 +
          //     "px, 0px, 0px)"
          //     );
          MZDPage.resetInsightType();

          $("#insight-list .lists .single-item").each(function () {
            if (type === "전체") {
              $(this).addClass("appear");
            } else {
              if ($(this).find(".item-type").text() === type) {
                $(this).addClass("appear");
              } else $(this).addClass("disappear");
            }
          });
          setTimeout(() => {
            $("#insight-list .lists .appear").length < 7 ? $(".load_more_btn").hide() : $(".load_more_btn").show();
            $("#insight-list .lists .appear").slice(0, 6).addClass("_loaded_item");
          }, 300);
        }
      });


      // $("#insight-list .types .type").on("touchstart touchmove swipe", async function () {
      // const index = $(this).attr("data-slick-index");
      // $("#insight-list .types .type").each(function () {
      //   $(this).removeClass("active");
      // if (index == $(this).attr("data-slick-index"))
      //   $(this).addClass("active");
      // else $(this).removeClass("active");
      // });
      // $(this).addClass("active");
      // });

      // $("#insight-list .types .type").on("touchend", async function () {
      //     const type = $(this).text();
      //     const index = $(this).attr("data-slick-index");
      //     await $("#insight-list .types .type").each(function () {
      //       if (index == $(this).attr("data-slick-index"))
      //         $(this).addClass("active");
      //       else $(this).removeClass("active");
      //     });
      //     $("#insight-list .types .slick-track").css(
      //       "transform",
      //       "translate3d(-" +
      //         $(this).attr("data-slick-index") * 40 +
      //         "px, 0px, 0px)"
      //     );
      //   await MZDPage.resetInsightType();

      //   $("#insight-list .lists .single-item").each(function () {
      //     if (type === "전체") {
      //       $(this).addClass("appear");
      //     } else {
      //       if ($(this).find(".item-type").text() === type) {
      //         $(this).addClass("appear");
      //       } else $(this).addClass("disappear");
      //     }
      //   });
      //   setTimeout(()=>{
      //     $("#insight-list .lists .appear").length <7?$(".load_more_btn").hide(): $(".load_more_btn").show();
      //     $("#insight-list .lists .appear").slice(0,6).addClass("_loaded_item");

      //   },300);
      // });
    }
    else {
      $("#insight-list .types .type").on("click", async function () {
        await $("#insight-list .lists .single-item").removeClass("_loaded_item")
        const type = $(this).text();
        $("#insight-list .types .type").each(function () {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
        // $("#insight-list .types .slick-track").css(
        //   "transform",
        //   "translate3d(-" +
        //     $(this).attr("data-slick-index") * 40 +
        //     "px, 0px, 0px)"
        // );
        await MZDPage.resetInsightType();

        $("#insight-list .lists .single-item").each(function () {
          if (type === "전체") {
            $(this).addClass("appear");
          } else {
            if ($(this).find(".item-type").text() === type) {
              $(this).addClass("appear");
            } else $(this).addClass("disappear");
          }
        });
        setTimeout(() => {
          $("#insight-list .lists .appear").length < 7 ? $(".load_more_btn").hide() : $(".load_more_btn").show();
          $("#insight-list .lists .appear").slice(0, 6).addClass("_loaded_item");
        }, 300);
      });
    }
    $(".load_more_btn").on('click', function (e) {
      e.preventDefault();
      $("#insight-list .lists .appear:not('._loaded_item')").slice(0, 6).addClass("_loaded_item");
      if ($("#insight-list .lists .appear:not('._loaded_item')").length == 0) {
        $(".load_more_btn").hide();
      }
    });


    $("#news-list .types .type").click(function () {
      const type = $(this).text();
      $("#news-list .types .type").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
      $("#news-list .types .slick-track").css(
        "transform",
        "translate3d(-" +
        $(this).attr("data-slick-index") * 120 +
        "px, 0px, 0px)"
      );
      MZDPage.resetInsightType();
      var w = window.innerWidth;
      var size_page = 5;
      switch (type) {
        case "문화행사":
          $("#news-list .lists .single-item").each(function (index) {
            if (w > 768) {
              $(this).css("display", "flex");
            } else {
              $(this).css("display", "inline");
            }
          });
          var count = 0;
          $("#news-list .lists .single-item").each(function (index) {
            var category = $(this).find(".separate").text();
            if ((category !== "문화행사")) {
              $(this).css("display", "none");
            }
            if (category == "문화행사") {
              count += 1;
            }
          });
          if (count <= size_page) {
            $("#button-loadmore").css("display", "none");
          }
          break;
        case "보도기사":
          $("#news-list .lists .single-item").each(function (index) {
            if (w > 768) {
              $(this).css("display", "flex");
            } else {
              $(this).css("display", "inline");
            }
          });
          var count = 0;
          $("#news-list .lists .single-item").each(function (index) {
            var category = $(this).find(".separate").text();
            if ((category !== "보도기사")) {
              $(this).css("display", "none");
            }
            if (category == "보도기사") {
              count += 1;
            }
          });
          if (count <= size_page) {
            $("#button-loadmore").css("display", "none");
          }
          break;
        default:
          $("#news-list .lists .single-item").each(function (index) {
            if (w > 768) {
              $(this).css("display", "flex");
            } else {
              $(this).css("display", "inline");
            }
          });
          $("#button-loadmore").css("display", "flex");
          break;
      }
    });
  },

  //Reset Insight Type
  resetInsightType: function () {
    $("#insight-list .lists .single-item").each(function () {
      $(this).removeClass("appear").removeClass("_loaded_item");
      $(this).removeClass("disappear");
    });
  },

  //Show Header Fixed on Scroll
  scrollEffect: function () {
    //Header Pin
    $(document).scroll(function () {
      if ($(window).scrollTop() > 80) {
        //$("#header").addClass("fixed"); //fixed header
        //$("#header-desktop").addClass("fixed"); //fixed header
        $("#scrollTop").css("opacity", "1"); //display button scroll top
        $("#nav-icon5").css("display", "block");
        $("#back-icon-white").css("display", "block");
        $("#nav-icon4").css("display", "none");
        $("#back-icon-black").css("display", "none");
        $(".header-white").addClass("transparent");
        $(".header-white").removeClass("white");
      } else {
        //$("#header").removeClass("fixed");
        //$("#header-desktop").removeClass("fixed");
        $("#scrollTop").css("opacity", "0");
        $("#back-icon-white").css("display", "none");
        $("#nav-icon5").css("display", "none");
        $("#back-icon-black").css("display", "block");
        $("#nav-icon4").css("display", "block");
        $(".header-white").removeClass("transparent");
        $(".header-white").addClass("white");
      }
    });

    let headerMoving = function(direction){
      if (direction === "up"){
        $("#header").addClass("fixed");
        $("#header-desktop").addClass("fixed");

      } else if (direction === "down"){
        $("#header").removeClass("fixed");
        $("#header-desktop").removeClass("fixed");
      }
    }
    let prevScrollTop = 80;
    $(document).scroll(function () {
      let nextScrollTop = window.pageYOffset || 80;
      if (nextScrollTop < prevScrollTop){
        headerMoving("down");
      } else if (nextScrollTop > prevScrollTop){
        headerMoving("up");
      } 
    });


    // $(document).on("scroll touchmove", function () {
    //   var w = window.innerWidth;
    //   const itemPosition1 = $(".service1")?.offset()?.top;
    //   const itemPosition2 = $(".service2")?.offset()?.top;
    //   const itemPosition3 = $(".service3")?.offset()?.top;
    //   const yPos = window.pageYOffset;   
      
    //   if (
    //     w > 991 && 
    //     $(window).scrollTop() > 430 &&
    //     $(window).scrollTop() < itemPosition3
    //   ) {
    //     $(".techandsv_navbar").addClass("fixed") //fixed menu in service pages
    //   }
    //    else if(
    //     w < 991 && 
    //     $(window).scrollTop() > 220 &&
    //     $(window).scrollTop() < itemPosition3
    //   ){
    //     $(".techandsv_navbar").addClass("fixed")
    //   }
    //   else{
    //     $(".techandsv_navbar").removeClass("fixed");
    //   }

    //   if (yPos < itemPosition1) {
    //     $("#service1").addClass("active");
    //     $("#service2").removeClass("active");
    //     $("#service3").removeClass("active");
    //   } else if (yPos > itemPosition1 && yPos < itemPosition2) {
    //     $("#service1").removeClass("active");
    //     $("#service2").addClass("active");
    //     $("#service3").removeClass("active");
    //   } else {
    //     $("#service1").removeClass("active");
    //     $("#service2").removeClass("active");
    //     $("#service3").addClass("active");
    //   }
    // });
  },

  //Footer Page List Toggle
  toogleFooterPageList: function () {
    $("#footer .footer-bottom .page-theme .theme-list").click(function () {
      $(this).toggleClass("active");
    });
    $("#footer .theme-list-mobile").click(function () {
      $(this).toggleClass("active");
    });
    jQuery(document).click(function (event) {
      if (!jQuery(event.target).is("#footer .page-theme .theme-list *")) {
        $("#footer .footer-bottom .page-theme .theme-list").removeClass(
          "active"
        );
      }
      if (!jQuery(event.target).is("#footer .theme-list-mobile *")) {
        $("#footer .theme-list-mobile").removeClass("active");
      }
    });
  },

  //Tech Slider
  carouselTechService: function () {
    $("#techandsv_home .techandsv_container .related_slider").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            // infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  },

  //Column2 Slider
  column2MainScreenSlider: function () {
    $("#mainscreen .mainscreen-content").slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: false,
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    });
  },
  mobileDisplay: function () {
    if (window.outerWidth < 991) {
      $(".nav-icon").click(function () {
        $(this).toggleClass("open");
        $("#header ul#nav").css("top", $("#header").offsetHeight);
        $("#header ul#nav").toggleClass("open");
        if ($(this).hasClass("open")) {
          $("html").css({
            overflowY: "hidden",
            height: "100%",
          });
          // open GNB on home page mobile
          $(".header-big").addClass("open");
          // open GNB other pages
          $(".sub-header").addClass("open");
        } else {
          $("html").css({
            overflowY: "auto",
          });
          $(".header-big").removeClass("open");
          $(".sub-header").removeClass("open");
        }
      });
    }
  },
  popUpPdf: function () {
    $("#popup-pdf,#popup-pdf-d").click(function () {
      $(".popup-pdf-mobile").css({
        display: "block",
      });
      $("html").css({
        overflowY: "hidden",
      });
    });
    $(".close-popup, .popup-pdf-mobile_btn").click(function () {
      $(".popup-pdf-mobile").css({
        display: "none",
      });
      $("html").css({
        overflowY: "auto",
      });
    });
    $("#popup-pdf-desktop").click(function () {
      $(".popup-pdf-desktop").css({
        display: "block",
      });
    });
    $(".close-popup-desktop").click(function () {
      $(".popup-pdf-desktop").css({
        display: "none",
      });
    });
  },

  init: function () {
    this.mainSlider();
    this.mainWelcomeSlider();

    this.techSlider();
    this.newsSlider();
    this.changeInsightList();
    this.toogleFooterPageList();
    this.scrollEffect();
    this.carouselTechService();
    this.column2MainScreenSlider();
    this.mobileDisplay();
    this.popUpPdf();
  },
};
