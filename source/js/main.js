// Header menu show/hide 
$('.header-switch').on('click', function() {
  if ($('.header').is('.menu-show')) {
    $('.header').removeClass('menu-show')
  } else {
    $('.header').addClass('menu-show')
  }
})

// Add or Remove .select for selected items 
$('.drink-menu-slider-item').on('click', function() {
  if ($(this).is('.select')) {
    $(this).removeClass('select')
  } else {
    $(this).addClass('select')
  }
})

$('.cart-item').on('click', function() {
  if ($(this).is('.is-expanded')) {
    $(this).removeClass('is-expanded')
  } else {
    $(this).addClass('is-expanded')
  }
})

// Slider function
$('.drink-menu-slider').flickity({
  prevNextButtons: false,
  cellAlign: 'left',
  pageDots: false,
  contain: true
})



