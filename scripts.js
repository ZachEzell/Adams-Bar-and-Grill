$(() => {
  $('.owl-carousel').owlCarousel({
    margin: 0,
    autoplay: true,
    loop: true,
    dots: false,
    items: 4,
    autoplayTimeout: 2500,
    autoplayHoverPause: false
  });
});
$(() => {
  AOS.init();
});
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 60) {
      $('#back-to-top').fadeOut();
    } else {
      $('#back-to-top').fadeIn();
    }
  });
});

$(function() {
  $('.book-us-btn').on('click', function() {
    $('.book-us-btn').addClass('animated flipInX');
  });
});
/* ABOUT US COCKTAIL SCHOOL */
var buttonStatus = false;
$(document).ready(function() {
  $('#cocktail-school-box').hide();
});

// Button Status
var buttonStatus = false;

$('.book-us-btn').on('click', function() {
  if (buttonStatus == false) {
    $('#cocktail-school-box').addClass('animated slideInRight');
    $('#cocktail-school-box').show();
  } else {
    $('#cocktail-school-box').hide();
  }
  buttonStatus == false ? (buttonStatus = true) : (buttonStatus = false);
});

$(document).on('scroll', function() {
  if ($(this).scrollTop() >= $('.navbar').position().top) {
    $('.navbar').addClass('navbar-fixed-top');
    $('.vesco-top-nav').css('background', 'rgba(48,55,59, 0.5)');
  }
  if ($(this).scrollTop() <= $('.navbar').position().top) {
    $('.navbar').removeClass('navbar-fixed-top');
    $('.vesco-top-nav').css('background', 'rgba(48,55,59, 1)');
  }
});
$(function() {
  $('a.smooth-scroll').click(function(event) {
    event.preventDefault();

    var section = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(section).offset().top
    });
  });
});
