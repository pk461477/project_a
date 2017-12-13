$(document).ready(function() {
   
    /* For the sticky navigation */
    /*$('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
    } else {
            $('nav').removeClass('sticky');
            }
    }, {
    offset: '200px;'
    });*/
    
    
    /* Click for Sub Menu */
    $(".js--menu-nav").click(function(){
        $(".sub-menu").slideToggle("slow");
    });
    
    
    
    
    
    /* Animations on Scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });
    
    
    
    /*Breakfast Photo Slideshow */
    var slideCount = $('#breakfast-slider ul li').length;
	var slideWidth = $('#breakfast-slider ul li').width();
	var slideHeight = $('#breakfast-slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#breakfast-slider').css({ width: slideWidth, height: slideHeight });
	
	$('#breakfast-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#breakfast-slider ul li:last-child').prependTo('#breakfast-slider ul');

    function moveLeft() {
        $('#breakfast-slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#breakfast-slider ul li:last-child').prependTo('#breakfast-slider ul');
            $('#breakfast-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#breakfast-slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#breakfast-slider ul li:first-child').appendTo('#breakfast-slider ul');
            $('#breakfast-slider ul').css('left', '');
        });
    };

    $('a.breakfast_control_prev').click(function () {
        moveLeft();
    });

    $('a.breakfast_control_next').click(function () {
        moveRight();
    }); 
    
    
    
    /*Lunch Photo Slideshow */
    var slideCount2 = $('#lunch-slider ul li').length;
	var slideWidth2 = $('#lunch-slider ul li').width();
	var slideHeight2 = $('#lunch-slider ul li').height();
	var sliderUlWidth2 = slideCount2 * slideWidth2;
	
	$('#lunch-slider').css({ width: slideWidth2, height: slideHeight2 });
	
	$('#lunch-slider ul').css({ width: sliderUlWidth2, marginLeft: - slideWidth2 });
	
    $('#lunch-slider ul li:last-child').prependTo('#lunch-slider ul');

    function moveLeft2() {
        $('#lunch-slider ul').animate({
            left: + slideWidth2
        }, 200, function () {
            $('#lunch-slider ul li:last-child').prependTo('#lunch-slider ul');
            $('#lunch-slider ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#lunch-slider ul').animate({
            left: - slideWidth2
        }, 200, function () {
            $('#lunch-slider ul li:first-child').appendTo('#lunch-slider ul');
            $('#lunch-slider ul').css('left', '');
        });
    };

    $('a.lunch_control_prev').click(function () {
        moveLeft2();
    });

    $('a.lunch_control_next').click(function () {
        moveRight2();
    });  
    
    
    /*Dinner Photo Slideshow */
    var slideCount3 = $('#dinner-slider ul li').length;
	var slideWidth3 = $('#dinner-slider ul li').width();
	var slideHeight3 = $('#dinner-slider ul li').height();
	var sliderUlWidth3 = slideCount3 * slideWidth3;
	
	$('#dinner-slider').css({ width: slideWidth3, height: slideHeight3 });
	
	$('#dinner-slider ul').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
	
    $('#dinner-slider ul li:last-child').prependTo('#dinner-slider ul');

    function moveLeft3() {
        $('#dinner-slider ul').animate({
            left: + slideWidth3
        }, 200, function () {
            $('#dinner-slider ul li:last-child').prependTo('#dinner-slider ul');
            $('#dinner-slider ul').css('left', '');
        });
    };

    function moveRight3() {
        $('#dinner-slider ul').animate({
            left: - slideWidth3
        }, 200, function () {
            $('#dinner-slider ul li:first-child').appendTo('#dinner-slider ul');
            $('#dinner-slider ul').css('left', '');
        });
    };

    $('a.dinner_control_prev').click(function () {
        moveLeft3();
    });

    $('a.dinner_control_next').click(function () {
        moveRight3();
    });  
    
    
    /*Dessert Photo Slideshow */
    var slideCount4 = $('#dessert-slider ul li').length;
	var slideWidth4 = $('#dessert-slider ul li').width();
	var slideHeight4 = $('#dessert-slider ul li').height();
	var sliderUlWidth4 = slideCount4 * slideWidth4;
	
	$('#dessert-slider').css({ width: slideWidth4, height: slideHeight4 });
	
	$('#dessert-slider ul').css({ width: sliderUlWidth4, marginLeft: - slideWidth4 });
	
    $('#dessert-slider ul li:last-child').prependTo('#dessert-slider ul');

    function moveLeft4() {
        $('#dessert-slider ul').animate({
            left: + slideWidth4
        }, 200, function () {
            $('#dessert-slider ul li:last-child').prependTo('#dessert-slider ul');
            $('#dessert-slider ul').css('left', '');
        });
    };

    function moveRight4() {
        $('#dessert-slider ul').animate({
            left: - slideWidth4
        }, 200, function () {
            $('#dessert-slider ul li:first-child').appendTo('#dessert-slider ul');
            $('#dessert-slider ul').css('left', '');
        });
    };

    $('a.dessert_control_prev').click(function () {
        moveLeft4();
    });

    $('a.dessert_control_next').click(function () {
        moveRight4();
    });  
    
    
    /*Sides Photo Slideshow */
    var slideCount5 = $('#sides-slider ul li').length;
	var slideWidth5 = $('#sides-slider ul li').width();
	var slideHeight5 = $('#sides-slider ul li').height();
	var sliderUlWidth5 = slideCount5 * slideWidth5;
	
	$('#sides-slider').css({ width: slideWidth5, height: slideHeight5 });
	
	$('#sides-slider ul').css({ width: sliderUlWidth5, marginLeft: - slideWidth5 });
	
    $('#sides-slider ul li:last-child').prependTo('#sides-slider ul');

    function moveLeft5() {
        $('#sides-slider ul').animate({
            left: + slideWidth5
        }, 200, function () {
            $('#sides-slider ul li:last-child').prependTo('#sides-slider ul');
            $('#sides-slider ul').css('left', '');
        });
    };

    function moveRight5() {
        $('#sides-slider ul').animate({
            left: - slideWidth5
        }, 200, function () {
            $('#sides-slider ul li:first-child').appendTo('#sides-slider ul');
            $('#sides-slider ul').css('left', '');
        });
    };

    $('a.sides_control_prev').click(function () {
        moveLeft5();
    });

    $('a.sides_control_next').click(function () {
        moveRight5();
    });  
    
    
    /*Beverages Photo Slideshow */
    var slideCount6 = $('#beverages-slider ul li').length;
	var slideWidth6 = $('#beverages-slider ul li').width();
	var slideHeight6 = $('#beverages-slider ul li').height();
	var sliderUlWidth6 = slideCount6 * slideWidth6;
	
	$('#beverages-slider').css({ width: slideWidth6, height: slideHeight6 });
	
	$('#beverages-slider ul').css({ width: sliderUlWidth6, marginLeft: - slideWidth6 });
	
    $('#beverages-slider ul li:last-child').prependTo('#beverages-slider ul');

    function moveLeft6() {
        $('#beverages-slider ul').animate({
            left: + slideWidth6
        }, 200, function () {
            $('#beverages-slider ul li:last-child').prependTo('#beverages-slider ul');
            $('#beverages-slider ul').css('left', '');
        });
    };

    function moveRight6() {
        $('#beverages-slider ul').animate({
            left: - slideWidth6
        }, 200, function () {
            $('#beverages-slider ul li:first-child').appendTo('#beverages-slider ul');
            $('#beverages-slider ul').css('left', '');
        });
    };

    $('a.beverages_control_prev').click(function () {
        moveLeft6();
    });

    $('a.beverages_control_next').click(function () {
        moveRight6();
    });  
    
    
    /*Specials Photo Slideshow */
    var slideCount7 = $('#specials-slider ul li').length;
	var slideWidth7 = $('#specials-slider ul li').width();
	var slideHeight7 = $('#specials-slider ul li').height();
	var sliderUlWidth7 = slideCount7 * slideWidth7;
	
	$('#specials-slider').css({ width: slideWidth7, height: slideHeight7 });
	
	$('#specials-slider ul').css({ width: sliderUlWidth7, marginLeft: - slideWidth7 });
	
    $('#specials-slider ul li:last-child').prependTo('#specials-slider ul');

    function moveLeft7() {
        $('#specials-slider ul').animate({
            left: + slideWidth7
        }, 200, function () {
            $('#specials-slider ul li:last-child').prependTo('#specials-slider ul');
            $('#specials-slider ul').css('left', '');
        });
    };

    function moveRight7() {
        $('#specials-slider ul').animate({
            left: - slideWidth7
        }, 200, function () {
            $('#specials-slider ul li:first-child').appendTo('#specials-slider ul');
            $('#specials-slider ul').css('left', '');
        });
    };

    $('a.specials_control_prev').click(function () {
        moveLeft7();
    });

    $('a.specials_control_next').click(function () {
        moveRight7();
    });  
    
    
    
    /* Sliding Div Content */
    $(document).ready(function() {
        
    var slideNum = $('.menu-box').length,
    wrapperWidth = 100 * slideNum,
    slideWidth = 100 / slideNum;
        
    $('.menu-slides').width(wrapperWidth + '%');
    $('.menu-box').width(slideWidth + '%');

    $('a.scrollitem').click(function() {
    $('a.scrollitem').removeClass('selected');
    $(this).addClass('selected');

    var slideNumber = $($(this).attr('href')).index('.menu-box'),
      margin = slideNumber * -100 + '%';

    $('.menu-slides').animate({
      marginLeft: margin
    }, 1000);
    return false;
        });   
    });
    
    
    
    /* Navigation Scroll */
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
    
});