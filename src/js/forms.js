import Inputmask from 'inputmask';

let forms = {

    init() {
        let selector = document.querySelectorAll('.js-mask__tel');
        Inputmask({
            mask: '+7 999 999 99 99',
            showMaskOnHover: false,
        }).mask(selector);
    },

};

export default forms;