import $ from 'jquery';


const numbers = {
  init() {
    let trigger = true;
    const numbersActivate = () => {
      $('.allstat__title').each(function () {
        const number = +$(this).data('number');
        const prefix = $(this).data('prefix');
        $(this).animate({ num: number }, {
          duration: 3000,
          step: function (num) {
            this.innerHTML = prefix + (num).toFixed(0)
          }
        });

      })
    }
    $(window).on('scroll', function () {
      if (trigger) {
        const scrollTop = $(this).scrollTop();
        const offsetTopItem = $('.allstat').offset().top - ($(window).innerHeight() / 2);
        if (scrollTop > offsetTopItem) {
          trigger = false;
          numbersActivate();
        }
      }
    })
  }
}


export default numbers;