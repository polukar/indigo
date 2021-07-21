import $ from "jquery";

const calc = {
  init() {
    let ico;
    let month;
    let summ;
    let moneyInputChecked = false;
    let monthInputChecked = false;

    const updateCalc = () => {
      $('.calculate__radios--money input').each(function () {
        if ($(this).prop('checked')) {
          moneyInputChecked = true;
          ico = $(this).data('ico');
        }
      });

      $('.calculate__radios--month input').each(function () {
        if ($(this).prop('checked')) {
          monthInputChecked = true;
          month = $(this).data('month');
        }
      });

      summ = +$('.calculate__input').val();

      function calculateSumm(summ, proc) {
        summ = +summ;
        proc = `${proc}%`;
        $('.calculate__summ').empty().text('+' + summ.toFixed(2));
        $('.static-chart__procent').empty().text(proc);
        $('.static-chart__money').empty().text(`+${ico}${summ.toFixed(2)}`);
      }

      if (moneyInputChecked && monthInputChecked && summ > 0) {
        switch (month) {
          case 12:
            calculateSumm(`${summ * 1.98}`, 98);
            break;
          case 6:
            calculateSumm(`${summ * (1 + ((.98 / 12) * 6))}`, ((98 / 12) * 6))
            break;
          case 3:
            calculateSumm(`${summ * (1 + ((.98 / 12) * 3))}`, ((98 / 12) * 3));
            break;
        }
      } else {
        $('.calculate__summ, .static-chart__money, .static-chart__money').empty().text('-');
      }
    }

    $(window).on('load', function () {
      updateCalc();
      $('.radio').on('click', function () {
        updateCalc();
      });
      $('.calculate__input').on('keydown', function () {
        let value = $(this).val().replace(/\D+/g, "");
        $(this).val(value);
        updateCalc();
      })
      $('.calculate__input').on('keyup', function () {
        let value = $(this).val().replace(/\D+/g, "");
        $(this).val(value);
        updateCalc();
      })
    });


    $('.static-year').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      var dataChart = $(this).data('chart');
      if ($(window).width() < 601) {
        $('.chart__imgs-mobile').each(function () {
          if ($(this).data('chart') == dataChart) {
            $(this).addClass('active').siblings().removeClass('active');
          }
        })
      } else {
        $('.chart__imgs-desktop').each(function () {
          if ($(this).data('chart') == dataChart) {
            $(this).addClass('active').siblings().removeClass('active');
          }
        })
      }

    })
  }
}


export default calc;