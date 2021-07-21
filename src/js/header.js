import $ from 'jquery';

const header = {
  init() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 10) $('.header').addClass('--js-header-scroll')
      else $('.header').removeClass('--js-header-scroll')
    });


    $('.header__burger').on('click', function () {
      $('.mobile__nav').fadeIn();
    });

    $('.mobile__nav-close').on('click', function () {
      $('.mobile__nav').fadeOut();
    })
  }
}


export default header;