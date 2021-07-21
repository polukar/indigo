import $ from 'jquery';

const accardeon = {
  init() {
    $('.accardeon__main').on('click', function () {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).nextAll('.accardeon__drop').slideDown();
        $(this).parents('.accardeon__item').siblings('.accardeon__item').find('.accardeon__main').removeClass('active');
        $(this).parents('.accardeon__item').siblings('.accardeon__item').find('.accardeon__drop').slideUp();
      } else {
        $(this).removeClass('active');
        $(this).nextAll('.accardeon__drop').slideUp();
      }
    })
  }
}


export default accardeon;