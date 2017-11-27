$('.header-switch').on('click', function () {
  if ($('.header').is('.menu-show')) {
    $('.header').removeClass('menu-show')
  } else {
    $('.header').addClass('menu-show')
  }
})