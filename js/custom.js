$(function(){
    
//    STICKY MENU
    
     $(window).scroll(function(){
  
  var scrollAmount = $(window).scrollTop();
  
  if(scrollAmount > 300){
    $('.main_menu').addClass('sticky');
     }
  else{
   $('.main_menu').removeClass('sticky');
  }
  
 });
    
    
    
    
    
//    TOGGLE MENU
    
 $('.toggle_bars').click(function(){
        $('.main_menu .navbar-nav').toggleClass("menu_active")
    });
 
     
    
//    SLICK-SLIDER
    

//$('.slider_active').slick({
//    arrows:true,
//    prevArrow:'.left_btn',
//    nextArrow:'.right_btn',
//	
//});
  
  function mainSlider() {
        var BasicSlider = $('.slider_active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.slider_active:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slider_active[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 1000,
            dots: false,
            fade: false,
			arrows:true,
    prevArrow:'.left_btn',
    nextArrow:'.right_btn',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
  
  
  
    
    
 
//MIX_IT_UP
    
 var mixer = mixitup('.mix_wrap');
 
//   VENOBOX
 
$('.venobox').venobox({
    spinner:'cube-grid',
    share:['facebook', 'twitter', 'pinterest', ],
    spinColor: 	'#5add87',
    
});
 
    
    
//    COUNTER-UP  
    
      $(document).ready(function(){

  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 9000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

});  
    
    
    
    
    //    BLOG-SLIDER   
    $('.blog_active').slick({
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
        
     responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
//        infinite: true,
//        dots: true
      }
    },
         
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
         
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
        
    
    
    
// BRAND-SLIDER
 $('.slide_brand').slick({
    slidesToShow:5,
    slidesToScroll:1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
          responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
//        infinite: true,
//        dots: true
      }
    },
              
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
              
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]

});
     
   
//  WOW PLUGIN
  
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
  
  
  
    
 
 
    
    
    
});