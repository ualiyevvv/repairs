
window.addEventListener('DOMContentLoaded', () => {


  const slider_responesive_conf = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]


  $(document).ready(function(){
    $('.since-work__slider').slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $("#since-work_arrow-left"),
      nextArrow: $("#since-work_arrow-right"),
      responsive: slider_responesive_conf
      
    });
  });




  $(document).ready(function(){
    $('.sales__slider').slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $("#sales_arrow-left"),
      nextArrow: $("#sales_arrow-right"),
      responsive: slider_responesive_conf
      
    });
  });

  
  $(document).ready(function(){
    $('.measure__slider').slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $("#measure_arrow-left"),
      nextArrow: $("#measure_arrow-right"),
      responsive: slider_responesive_conf
      
    });
  });


  
  $(document).ready(function(){
    $('.guaranty__slider').slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $("#guaranty_arrow-left"),
      nextArrow: $("#guaranty_arrow-right"),
      responsive: slider_responesive_conf
      
    });
  });
  
})
