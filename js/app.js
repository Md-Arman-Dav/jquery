$(document).ready(function () {
  $('#toggleMode').click(function () {
    $('body').toggleClass('dark-mode');

    const icon = $('#modeIcon');
    if ($('body').hasClass('dark-mode')) {
      icon.removeClass('fa-moon').addClass('fa-sun');
    } else {
      icon.removeClass('fa-sun').addClass('fa-moon');
    }
  });
});

$(window).on('load', function () {
  $('.loder').fadeOut();
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 400) {
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }
});

$(window).on('load', function () {
  $('.loder').fadeOut();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.backTOTop').fadeIn();
  } else {
    $('.backTOTop').fadeOut();
  }
});

$('.backTOTop').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    300
  );
});
