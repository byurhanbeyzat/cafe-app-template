$('.header-switch').on('click', function () {
  if ($('.header').is('.menu-show')) {
    $('.header').removeClass('menu-show')
  } else {
    $('.header').addClass('menu-show')
  }
})

$('.drink-menu-slider').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  prevNextButtons: false
});