$('.tst-sldr-rght-slider').slick({
  infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='//cdn.shopify.com/s/files/1/0723/3621/2253/files/arrow-left.svg'></button>",
   nextArrow:"<button type='button' class='slick-next pull-right'><img src='//cdn.shopify.com/s/files/1/0723/3621/2253/files/arrow-right.svg'></button>",
  slidesToShow: 1,
  slidesToScroll: 1
});



$('.tst-module-slider').slick({
  centerMode: true,
  infinite: true,
     dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
   arrows: true,
     prevArrow:"<button type='button' class='slick-prev pull-left'><img src='//cdn.shopify.com/s/files/1/0723/3621/2253/files/arrow-left.svg'></button>",
   nextArrow:"<button type='button' class='slick-next pull-right'><img src='//cdn.shopify.com/s/files/1/0723/3621/2253/files/arrow-right.svg'></button>",
  centerPadding: '0px',
  slidesToShow: 7,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5
      }
    },
       {
      breakpoint: 900,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
       {
      breakpoint: 480,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
	
